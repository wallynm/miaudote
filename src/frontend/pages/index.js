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

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <Layout title='Index Page' linkTo='/other' />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Counter)
