'use client'

import { useEffect, useState } from 'react'
import { Typography, Switch, Row, Col, Input, Select, Button, message } from 'antd'
import { BulbOutlined, BulbFilled, BellOutlined, LockOutlined, SafetyOutlined, UserOutlined, GlobalOutlined, DeleteOutlined } from '@ant-design/icons'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'

const { Title, Text } = Typography
const { Option } = Select

export default function SettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [theme, setTheme] = useState<string>('light')
  const [settingId, setSettingId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [dataSharing, setDataSharing] = useState<boolean>(true)
  const [language, setLanguage] = useState<string>('en')
  const [fontSize, setFontSize] = useState<number>(14)
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true)
  const [pushNotifications, setPushNotifications] = useState<boolean>(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState<boolean>(false)

  useEffect(() => {
    const fetchSettings = async () => {
      if (userId) {
        try {
          const settings = await Api.Setting.findMany({
            filters: { userId: { eq: userId } },
            includes: ['user'],
          })
          if (settings.length > 0) {
            setTheme(settings[0].theme)
            setSettingId(settings[0].id)
          }
        } catch (error) {
          enqueueSnackbar('Failed to load settings', { variant: 'error' })
        }
      }
    }
    fetchSettings()
  }, [userId, enqueueSnackbar])

  const handleThemeChange = async (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light'
    setTheme(newTheme)
    if (settingId) {
      try {
        await Api.Setting.updateOne(settingId, { theme: newTheme })
        enqueueSnackbar('Theme updated successfully', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar('Failed to update theme', { variant: 'error' })
      }
    }
  }

  const handleSaveChanges = async () => {
    if (settingId) {
      try {
        await Api.Setting.updateOne(settingId, {
          theme,
          password,
          dataSharing,
          language,
          fontSize,
          emailNotifications,
          pushNotifications,
          twoFactorAuth,
        })
        message.success('Changes saved successfully')
      } catch (error) {
        message.error('Failed to save changes')
      }
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: theme === 'dark' ? '#1A1B26' : '#FFFFFF', color: theme === 'dark' ? '#A9B1D6' : '#000000', fontFamily: 'League Spartan' }}>
        <Col span={24} style={{ padding: '20px', overflowY: 'auto' }}>
          <Title level={2}>Settings</Title>

          <div style={{ marginBottom: '20px' }}>
            <Title level={4}><BulbOutlined /> Appearance</Title>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Dark Mode</Text>
              </Col>
              <Col span={12}>
                <Switch
                  checked={theme === 'dark'}
                  onChange={handleThemeChange}
                  checkedChildren={<BulbFilled />}
                  unCheckedChildren={<BulbOutlined />}
                />
              </Col>
            </Row>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Font Size</Text>
              </Col>
              <Col span={12}>
                <Select value={fontSize} onChange={setFontSize}>
                  <Option value={12}>12px</Option>
                  <Option value={14}>14px</Option>
                  <Option value={16}>16px</Option>
                  <Option value={18}>18px</Option>
                </Select>
              </Col>
            </Row>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Title level={4}><BellOutlined /> Notifications</Title>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Email Notifications</Text>
              </Col>
              <Col span={12}>
                <Switch checked={emailNotifications} onChange={setEmailNotifications} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Push Notifications</Text>
              </Col>
              <Col span={12}>
                <Switch checked={pushNotifications} onChange={setPushNotifications} />
              </Col>
            </Row>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Title level={4}><LockOutlined /> Account</Title>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Change Password</Text>
              </Col>
              <Col span={12}>
                <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Two-Factor Authentication</Text>
              </Col>
              <Col span={12}>
                <Switch checked={twoFactorAuth} onChange={setTwoFactorAuth} />
              </Col>
            </Row>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Title level={4}><SafetyOutlined /> Privacy</Title>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Data Sharing</Text>
              </Col>
              <Col span={12}>
                <Switch checked={dataSharing} onChange={setDataSharing} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Delete Account</Text>
              </Col>
              <Col span={12}>
                <Button danger icon={<DeleteOutlined />}>Delete</Button>
              </Col>
            </Row>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Title level={4}><GlobalOutlined /> Language</Title>
            <Row align="middle" style={{ marginBottom: '10px' }}>
              <Col span={12}>
                <Text>Language</Text>
              </Col>
              <Col span={12}>
                <Select value={language} onChange={setLanguage}>
                  <Option value="en">English</Option>
                  <Option value="es">Spanish</Option>
                  <Option value="fr">French</Option>
                </Select>
              </Col>
            </Row>
          </div>

          <Row style={{ marginTop: '20px' }}>
            <Col span={24}>
              <Button type="primary" onClick={handleSaveChanges}>Save Changes</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
