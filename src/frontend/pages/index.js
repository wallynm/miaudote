import React from 'react'
import { bindActionCreators } from 'redux'
import { serverRenderClock } from '../store'
import { connect } from 'react-redux'
import Layout from '../components/Layout'

const Counter = () => (
  <Layout title='Index Page' linkTo='/other' />
)

export default connect(
  null,
  null
)(Counter)
