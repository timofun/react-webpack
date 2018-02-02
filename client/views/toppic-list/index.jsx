import React from 'react'
import {
  inject,
  observer,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import appState from '../../store/app-state'

@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do someting
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeName(event) {
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="this is topic list" />
        </Helmet>
        <span>{this.props.appState.msg}</span>
        <input type="text" onChange={this.changeName} />
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(appState),
}
