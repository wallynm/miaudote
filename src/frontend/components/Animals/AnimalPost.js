import React from 'react'
import { connect } from 'react-redux'

import { Card, Icon, Avatar } from 'antd'
const { Meta } = Card

import { setAnimalFavorite, setAnimalLike } from 'store/animals/actions'

const AnimalPost = (props) => {
  console.info(props)
  let { id, picture, name, shortDescription, authorPicture, favorite, like, likeCount, setAnimalFavorite, setAnimalLike, author } = props
  const likeAmmount = like ? likeCount += 1 : like
  const ActionButtons = () => {
    return [<Icon type="star" onClick={() => setAnimalFavorite(id)} theme={favorite && "filled"}/>,
    <div>
      {likeAmmount}
      <Icon type="like" onClick={() => setAnimalLike(id)} theme={like && "filled"} />
    </div>,
    <Icon type="message" />]
  }

  return (
    <Card
      cover={<img alt="example" src={picture} />}
      actions={ActionButtons()}
  >
    <Meta
      avatar={<Avatar src={author.picture} />}
      title={name}
      description={shortDescription}
    />
  </Card>
  )
}

const mapDispatchToProps = {
  setAnimalFavorite,
  setAnimalLike
}

export default connect(
  null, mapDispatchToProps
)(AnimalPost)