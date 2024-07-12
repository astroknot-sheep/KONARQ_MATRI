import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row, Dropdown, Menu, Button, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'

const { Title, Text, Paragraph } = Typography

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  let itemsLeftbar = []

  let itemsUser = []

  let itemsTopbar = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },
    {
      key: '/chat',
      label: 'Chat',
      onClick: () => goTo('/chat'),
    },
    {
      key: '/settings',
      label: 'Settings',
      onClick: () => goTo('/settings'),
    },
    {
      key: '/export',
      label: 'Export',
      onClick: () => goTo('/export'),
    },
    {
      key: '/resources',
      label: 'Resources',
      onClick: () => goTo('/resources'),
    },
    {
      key: '/trusted-partners',
      label: 'Professional Help',
      onClick: () => goTo('/trusted-partners'),
    },
  ]

  let itemsSubNavigation = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },
    {
      key: '/chat',
      label: 'Chat',
      onClick: () => goTo('/chat'),
    },
    {
      key: '/settings',
      label: 'Settings',
      onClick: () => goTo('/settings'),
    },
    {
      key: '/export',
      label: 'Export',
      onClick: () => goTo('/export'),
    },
  ]

  let itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar =
    (itemsLeftbar.length > 0 || itemsUser.length > 0) &&
    !isMobile &&
    authentication.isLoggedIn

  if (!authentication.isLoggedIn) {
    itemsLeftbar = []
    itemsUser = []
    itemsTopbar = []
    itemsSubNavigation = []
    itemsMobile = []
  }

  const chatControlMenu = (
    <Menu>
      {itemsTopbar.map(item => (
        <Menu.Item key={item.key} onClick={item.onClick}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap');
        body {
          font-family: 'League Spartan', sans-serif;
        }
        .primary-bg {
          background-color: #1a1b26;
        }
        .secondary-bg {
          background-color: #24283b;
        }
        .text-color {
          color: #a9b1d6;
        }
        .primary-accent {
          color: #7aa2f7;
        }
        .secondary-accent {
          color: #9ece6a;
        }
        .tertiary-accent {
          color: #bb9af7;
        }
        .error-color {
          color: #f7768e;
        }
        .interactive-element {
          transition:
            background-color 0.3s,
            color 0.3s;
        }
        .interactive-element:hover {
          background-color: #7aa2f7;
          color: #fff;
        }
      `}</style>
      <Layout className="primary-bg">
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col className="secondary-bg">
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Row
              style={{
                width: '100%',
                padding: '10px 20px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Row style={{ alignItems: 'center' }}>
                <Logo />
                <Title level={3} style={{ margin: '0 10px' }}>
                  MAATRI
                </Title>
              </Row>
              <Button type="primary" onClick={() => goTo('/upgrade')}>
                Upgrade
              </Button>
            </Row>
            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />
              {children}
            </Col>
            <Row
              style={{
                width: '100%',
                padding: '10px 20px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Row>
                <Text className="text-color" style={{ marginRight: 20 }}>
                  Help
                </Text>
                <Text className="text-color" style={{ marginRight: 20 }}>
                  Privacy
                </Text>
                <Text className="text-color">Terms</Text>
              </Row>
              <Text className="text-color">© KONARQ TECHNOLOGIES</Text>
            </Row>
          </Col>
        </Row>
        <Dropdown overlay={chatControlMenu} trigger={['hover']}>
          <Button
            shape="circle"
            icon={<span style={{ fontSize: 24 }}>☰</span>}
            className="interactive-element"
            style={{
              position: 'fixed',
              top: '85%',
              right: 20,
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7AA2F7',
              borderColor: '#7AA2F7',
              color: '#fff',
            }}
          />
        </Dropdown>
      </Layout>
    </>
  )
}
