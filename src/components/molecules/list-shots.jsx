import React from 'react'
import PropTypes from 'prop-types'
import ListShotsItem from '../atoms/list-shots-item.jsx'

const ListShots = (props) => {
  return (
    <ul className='list-shots--wrapper'>
      {
        props.shots.shotsList.map((item, k) => {
          return <ListShotsItem key={k} {...item} />
        })
      }
    </ul>
  )
}

ListShots.propTypes = {
  shots: PropTypes.object
}

export default ListShots
