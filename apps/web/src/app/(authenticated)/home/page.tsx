'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, List, Card, Row, Col, Layout } from 'antd'
import { SmileOutlined, FrownOutlined, MehOutlined } from '@ant-design/icons'
import Image from 'next/image'
const { Title, Text, Paragraph } = Typography
const { Header, Content, Footer } = Layout
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [user, setUser] = useState<Model.User | null>(null)
  const [mood, setMood] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, { includes: ['moods', 'chats'] })
        .then(setUser)
        .catch(() =>
          enqueueSnackbar('Failed to load user data', { variant: 'error' }),
        )
    }
  }, [userId])

  const handleMoodChange = (value: string) => {
    setMood(value)
  }

  const handleMoodSubmit = async () => {
    if (userId && mood) {
      setLoading(true)
      try {
        await Api.Mood.createOneByUserId(userId, {
          moodValue: mood,
          timestamp: new Date().toISOString(),
        })
        enqueueSnackbar('Mood logged successfully', { variant: 'success' })
        setMood(null)
      } catch {
        enqueueSnackbar('Failed to log mood', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
  }

  const getGreetingMessage = () => {
    const currentHour = dayjs().hour()
    if (currentHour < 12) return 'Good morning'
    if (currentHour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <Layout style={{ backgroundColor: '#1E1E1E', color: '#FFFFFF', fontFamily: 'League Spartan, sans-serif' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1E1E1E' }}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Header>
      <Content style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2} style={{ color: '#FFFFFF' }}>{getGreetingMessage()}, {user?.name}</Title>
        <Paragraph style={{ color: '#FFFFFF' }}>
          Track your mood to monitor your mental health over time.
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          <Col span={24}>
            <Card title="Start New Chat" style={{ backgroundColor: '#2E2E2E', color: '#FFFFFF', textAlign: 'center' }}>
              <Button type="primary" style={{ backgroundColor: '#7AA2F7', borderColor: '#7AA2F7' }} onClick={() => router.push('/chat')}>Start New Chat</Button>
            </Card>
          </Col>
          <Col span={24}>
            <Card title="Your recent chats" style={{ backgroundColor: '#2E2E2E', color: '#FFFFFF', textAlign: 'center' }}>
              <List
                itemLayout="horizontal"
                dataSource={user?.chats}
                renderItem={chat => (
                  <List.Item>
                    <List.Item.Meta
                      title={chat.messages?.[0]?.content?.slice(0, 30) || 'No Title'}
                      description={dayjs(chat.timestamp).format('YYYY-MM-DD HH:mm')}
                    />
                  </List.Item>
                )}
              />
              <Button type="link" style={{ color: '#7AA2F7' }}>View all</Button>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#1E1E1E', color: '#FFFFFF' }}>
      </Footer>
    </Layout>
  )
}
