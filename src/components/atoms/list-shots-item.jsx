import React from 'react'
import PropTypes from 'prop-types'

const ListShotsItem = (props) => {
  console.info(props)

  const {
    title,
    images,
    comments_count,
    likes_count,
    views_count
  } = props

  let data = {
    imgMain: images.teaser ? images.teaser : images.normal
  }

  const renderTitle = () => {
    if (title) {
      return <h2>{ title }</h2>
    }

    return <h2>Untitle</h2>
  }

  return (
    <li className='list-shots--item'>
      <div className='list-shots--item__title'>
        { renderTitle() }
      </div>
      {
        data.imgMain &&
          <div className='list-shots--item__image'>
            <img src={data.imgMain} />
          </div>
      }
      <div className='list-shots--item__desc-numbers'>
        <span><strong>likes:</strong> {likes_count}</span>
        <span><strong>comments:</strong> {comments_count}</span>
        <span><strong>views:</strong> {views_count}</span>
      </div>
    </li>
  )
}

ListShotsItem.propTypes = {
  title: PropTypes.string,
  images: PropTypes.object,
  likes_count: PropTypes.num,
  comments_count: PropTypes.num,
  views_count: PropTypes.num
}

export default ListShotsItem
