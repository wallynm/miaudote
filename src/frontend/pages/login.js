import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import Signup from 'components/Login/Signup'

const Login = () => (
  <Layout title='Index Page' linkTo='/other'>
    <Signup/>
  </Layout>
)

export default connect(
  null,
  null
)(Login)
