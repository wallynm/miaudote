import react from 'react'
import './Layout.css'
import 'antd/dist/antd.css'
import Link from 'next/link'

import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

export default ({ children }) => (
  <Layout className="layout">
    <Header>
    <div className="logo" />
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
    >
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/login">Login</Link>
        </Menu.Item>    
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      { children }
    </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
)