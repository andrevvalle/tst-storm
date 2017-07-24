import React from 'react'
import axios from 'axios'
// require('../index.scss')

export default class App extends React.Component {
  componentWillMount () {
    axios.get('https://api.dribbble.com/v1/shots?access_token=60cfebb6c31c60cbc698451bce27ff81c0d7f2fda678b8da556f10d74402b87e')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return <h1>Hello World</h1>
  }
}
