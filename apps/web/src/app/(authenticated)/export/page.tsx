'use client'

import { useState, useEffect } from 'react'
import { Button, Typography, List, Spin } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ExportPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [chats, setChats] = useState<Model.Chat[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      Api.Chat.findManyByUserId(userId, { includes: ['messages'] })
        .then(setChats)
        .catch(() =>
          enqueueSnackbar('Failed to load chats', { variant: 'error' }),
        )
        .finally(() => setLoading(false))
    }
  }, [userId])

  const handleExport = async (chatId: string) => {
    try {
      const exportData = {
        exportFormat: 'json',
        timestamp: dayjs().toISOString(),
        chatId,
        userId,
      }
      await Api.Export.createOneByUserId(userId!, exportData)
      enqueueSnackbar('Chat history exported successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to export chat history', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Export Chat History</Title>
      <Paragraph>
        As a user, you can export your chat history to keep a record of your
        conversations.
      </Paragraph>
      {loading ? (
        <Spin size="large" />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={chats}
          renderItem={chat => (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  onClick={() => handleExport(chat.id)}
                >
                  Export
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={`Chat on ${dayjs(chat.timestamp).format('MMMM D, YYYY')}`}
                description={`Messages: ${chat.messages?.length || 0}`}
              />
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}
