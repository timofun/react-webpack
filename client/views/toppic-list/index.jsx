import React from 'react'
import {
  inject,
  observer,
} from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'

@inject('appState') @observer
export default class TopicList extends React.Component {

  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do someting
  }

  changeName(event) {
    this.props.appState.name = event.target.value
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName}/>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
}
