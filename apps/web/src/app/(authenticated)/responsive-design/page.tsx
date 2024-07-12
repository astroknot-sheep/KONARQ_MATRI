'use client'

import { Typography, Row, Col } from 'antd'
import { UserOutlined, MobileOutlined, LaptopOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ResponsiveDesignPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Responsive Design Page
      </Title>
      <Text
        style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}
      >
        Experience a responsive design on both mobile and desktop devices.
      </Text>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} style={{ textAlign: 'center' }}>
          <MobileOutlined style={{ fontSize: '48px', color: '#08c' }} />
          <Text style={{ display: 'block', marginTop: '10px' }}>
            Mobile View
          </Text>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ textAlign: 'center' }}>
          <LaptopOutlined style={{ fontSize: '48px', color: '#08c' }} />
          <Text style={{ display: 'block', marginTop: '10px' }}>
            Desktop View
          </Text>
        </Col>
      </Row>
    </PageLayout>
  )
}
