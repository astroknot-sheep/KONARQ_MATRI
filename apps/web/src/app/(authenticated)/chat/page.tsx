'use client'

import { useEffect, useState } from 'react'
import { List, Input, Button, Spin, Typography, Row, Col, Drawer } from 'antd'
import { SendOutlined, LoadingOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ChatPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [chats, setChats] = useState<Model.Chat[]>([])
  const [currentChat, setCurrentChat] = useState<Model.Chat | null>(null)
  const [messages, setMessages] = useState<Model.Message[]>([])
  const [newMessage, setNewMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [typing, setTyping] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)

  useEffect(() => {
    if (userId) {
      Api.Chat.findManyByUserId(userId, { includes: ['messages'] })
        .then(chats => {
          setChats(chats)
          if (chats.length > 0) {
            setCurrentChat(chats[0])
            setMessages(chats[0].messages || [])
          }
        })
        .catch(error => {
          enqueueSnackbar('Failed to load chat history', { variant: 'error' })
        })
    }
  }, [userId])

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if (e.clientX < 50) {
        setSidebarVisible(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientX > 200) {
        setSidebarVisible(false)
      }
    }

    window.addEventListener('mousemove', handleMouseOver)
    window.addEventListener('mousemove', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseOver)
      window.removeEventListener('mousemove', handleMouseOut)
    }
  }, [])

  const handleSendMessage = async () => {
    if (newMessage.trim() === '' || !currentChat) return

    setLoading(true)
    const timestamp = dayjs().toISOString()
    const message = {
      content: newMessage,
      timestamp,
      chatId: currentChat.id,
      senderId: userId,
    }

    try {
      const createdMessage = await Api.Message.createOneByChatId(
        currentChat.id,
        message,
      )
      setMessages([...messages, createdMessage])
      setNewMessage('')
      setLoading(false)
      setTyping(true)
      const response = await Api.Ai.chat(newMessage)
      setTyping(false)
      const botMessage = {
        content: response,
        timestamp: dayjs().toISOString(),
        chatId: currentChat.id,
        senderId: 'bot',
      }
      const createdBotMessage = await Api.Message.createOneByChatId(
        currentChat.id,
        botMessage,
      )
      setMessages([...messages, createdBotMessage])
    } catch (error) {
      setLoading(false)
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
    // Simulate typing suggestions
    setSuggestions(['Suggestion 1', 'Suggestion 2', 'Suggestion 3'])
  }

  return (
    <PageLayout layout="narrow">
      <Drawer
        title="Sidebar"
        placement="left"
        closable={false}
        onClose={() => setSidebarVisible(false)}
        visible={sidebarVisible}
        width={200}
      >
        <p>Sidebar content goes here</p>
      </Drawer>
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title>Chat Interface</Title>
          <Paragraph>Continue your conversation with the chatbot.</Paragraph>
        </Col>
        <Col span={24}>
          <List
            dataSource={messages}
            renderItem={message => (
              <List.Item>
                <List.Item.Meta
                  title={message.senderId === 'bot' ? 'Chatbot' : 'You'}
                  description={<Paragraph>{message.content}</Paragraph>}
                />
              </List.Item>
            )}
          />
          {typing && (
            <div style={{ textAlign: 'center', margin: '10px 0' }}>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              />
              <Text>Chatbot is typing...</Text>
            </div>
          )}
          <Input
            value={newMessage}
            onChange={handleInputChange}
            onPressEnter={handleSendMessage}
            placeholder="Type your message..."
            suffix={
              <Button
                type="primary"
                icon={<SendOutlined />}
                loading={loading}
                onClick={handleSendMessage}
              />
            }
          />
          {suggestions.length > 0 && (
            <div style={{ marginTop: '10px' }}>
              <Text>Suggestions:</Text>
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
