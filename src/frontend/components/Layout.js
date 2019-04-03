import React from 'react'
import './Layout.css'
import 'antd/dist/antd.css'
import Link from 'next/link'

import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

import { connect } from 'react-redux'


import { Router } from 'routes'

const LayoutTemplate = ({ children, routerState, url }) => {
  console.info(url)
  const currentPath = '/'
  console.info(currentPath)

  return (
    <Layout className="layout">
      <Header>
      <div className="logo" />
      <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentPath]}
          style={{ lineHeight: '64px' }}
          >
          <Menu.Item key="/">
            <Link href="/Home" as="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/login">
            <Link href="/Login" as="/login" replace>Login</Link>
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
}


export default connect(state => ({ routerState: state.router }))(LayoutTemplate)
