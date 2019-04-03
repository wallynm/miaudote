import React from 'react'
import { connect } from 'react-redux'

import { Card, Icon, Avatar } from 'antd'
const { Meta } = Card

import { setAnimalFavorite, setAnimalLike } from 'store/animals/actions'
import { push } from 'connected-next-router'
import Router, { Router as RBase } from 'routes'

console.info(Router)


const AnimalPost = (props) => {
  let { id, picture, name, shortDescription, authorPicture, favorite, like, likeCount, setAnimalFavorite, setAnimalLike, author, push } = props
  const likeAmmount = like ? likeCount += 1 : like

  console.info(push)

  const ActionButtons = () => {
    return [
    <div onClick={() => setAnimalFavorite(id)}>
      <Icon type="star" theme={favorite && "filled"}/>
    </div>,
    <div onClick={() => setAnimalLike(id)}>
      {likeAmmount}
      <Icon type="like" theme={like && "filled"} />
    </div>,
    <Icon type="message" />]
  }


  const accesCard = () => RBase.pushRoute('AnimalDetail', { id })
 
  return (
    <Card
      onClick={e => {
        e.preventDefault()
        accesCard()
     }}
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
  setAnimalLike,
  push
}

export default connect(
  null, mapDispatchToProps
)(AnimalPost)