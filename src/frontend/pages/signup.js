import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'

const Signup = () => (
  <Layout title='Index Page' linkTo='/other'>
    <Signup/>
  </Layout>
)

export default connect(
  null,
  null
)(Signup)
