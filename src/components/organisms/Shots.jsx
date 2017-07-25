import React from 'react'
import ListShots from '../molecules/list-shots.jsx'

const Shots = (props) => {
  return (
    <div className='row center-xs center-sm center-md'>
      <div className='col-xs-12 com-sm-6 col-md-4 col-lg-4'>
        <div className='box'>
          { ListShots(props) }
        </div>
      </div>
    </div>
  )
}

export default Shots
