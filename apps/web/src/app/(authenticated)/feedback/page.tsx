'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Rate, Row, Col } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FeedbackPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: { rating: number; comments: string }) => {
    setLoading(true)
    try {
      const chatId = params.chatId
      await Api.Feedback.createOneByChatId(chatId, { ...values, userId })
      enqueueSnackbar('Feedback submitted successfully!', {
        variant: 'success',
      })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to submit feedback. Please try again.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Provide Feedback</Title>
          <Text>
            We value your feedback. Please rate your experience and leave any
            comments.
          </Text>
        </Col>
        <Col span={24}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ maxWidth: '400px', margin: '0 auto' }}
          >
            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true, message: 'Please provide a rating' }]}
            >
              <Rate />
            </Form.Item>
            <Form.Item
              name="comments"
              label="Comments"
              rules={[
                { required: true, message: 'Please leave your comments' },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Share your experience..." />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<CommentOutlined />}
              >
                Submit Feedback
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
