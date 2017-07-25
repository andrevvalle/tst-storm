import React from 'react'

export default class Shots extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-8 col-md-6 col-lg-4'>
          <div className='box'>Responsive</div>
        </div>
      </div>
    )
  }
}
