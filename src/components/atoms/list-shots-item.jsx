import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class ListShotsItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      toggleClass: false
    }

    this._toggleDesc = this._toggleDesc.bind(this)
  }

  _renderTitle (title) {
    if (title) {
      return <h2>{ title }</h2>
    }

    return <h2>Untitle</h2>
  }

  _descNumbers () {
    const {
      comments_count,
      likes_count,
      views_count
    } = this.props

    /*eslint-disable */
    return (
      <div className='list-shots--item__desc-numbers--wrapper'>
        { likes_count && <span><strong>likes:</strong> {likes_count}</span>}
        { comments_count && <span><strong>comments:</strong> {comments_count}</span>}
        { views_count && <span><strong>views:</strong> {views_count}</span>}
      </div>
    )
    /*eslint-enable */
  }

  _toggleDesc () {
    this.setState({
      toggleClass: !this.state.toggleClass
    })
  }

  render () {
    const {
      title,
      images,
      user,
      description
    } = this.props

    const listItemClassName = cx(
      'list-shots--item',
      { show: this.state.toggleClass }
    )

    let data = {
      imgMain: images.teaser ? images.teaser : images.normal
    }

    return (
      <li className={listItemClassName} onClick={this._toggleDesc}>
        <div className='list-shots--item__title'>
          { this._renderTitle(title) }
        </div>
        {
          data.imgMain &&
            <div className='list-shots--item__image'>
              <img src={data.imgMain} />
            </div>
        }
        <div className='list-shots--item__desc-numbers'>
          { this._descNumbers() }
        </div>

        <div className='list-shots--item__desc'>
          {user.avatar_url && <img src={user.avatar_url} />}
          {user.name && <h4>{ user.name }</h4>}
          {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
        </div>

        <button onClick={this._toggleDesc}>Hide description</button>
      </li>
    )
  }
}

ListShotsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.object,
  user: PropTypes.object,
  'likes_count': PropTypes.number,
  'comments_count': PropTypes.number,
  'views_count': PropTypes.number
}

export default ListShotsItem
