import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getShots} from '../actions/index'

import axios from 'axios'
import Shots from '../components/Shots.jsx'

class ListShots extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shots: this.props.shots.shotsList
    }
  }

  componentWillMount () {
    let url = 'https://api.dribbble.com/v1/shots?access_token=60cfebb6c31c60cbc698451bce27ff81c0d7f2fda678b8da556f10d74402b87e'

    axios.get(url)
      .then((response) => {
        if (response.status === 200) {
          this.props.getShots(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      shots: nextProps.shots.shotsList
    })
  }

  render () {
    return this.state.shots.length !== 0 ? <Shots {...this.props} /> : null
  }
}

ListShots.propTypes = {
  shots: PropTypes.object,
  getShots: PropTypes.func
}

function mapStateToProps (state) {
  return {
    shots: state.shots
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getShots: getShots
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(ListShots)
