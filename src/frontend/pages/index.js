import React from 'react'
import { bindActionCreators } from 'redux'
import { serverRenderClock } from '../store'
import { connect } from 'react-redux'
import Layout from '../components/Layout'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())

    return { isServer }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <Layout title='Index Page' linkTo='/other' />
  }
}

export default connect(
  null,
  null
)(Counter)
