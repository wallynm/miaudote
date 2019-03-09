import React from 'react'
import { Row, Col } from 'antd';

import { bindActionCreators } from 'redux'
import { serverRenderClock } from '../store'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import { AnimalPost } from 'components/Animals'
import { animalsListSelector } from 'store/animals/selectors'

const Home = ({animalsList}) => {
  return (
    <Layout title='Index Page' linkTo='/other'>
      <Row gutter={8}>
        {animalsList.map(animal => (
          <Col xs={{ span: 8 }} lg={{ span: 6 }}>
            <AnimalPost key={animal.id} {...animal} />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

const mapStateToProps = state => ({
  animalsList: animalsListSelector(state)
})

export default connect(
  mapStateToProps,
  null
)(Home)