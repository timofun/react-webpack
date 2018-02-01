import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import TopicList from '../views/toppic-list'
import TopicDetail from '../views/topic-detail'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} component={TopicList} exact />,
  <Route path="/list" component={TopicList} />,
  <Route path="/detail" component={TopicDetail} />,
]
