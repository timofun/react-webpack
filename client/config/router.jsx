import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import TopicList from '../views/toppic-list'
import TopicDetail from '../views/topic-detail'

export default () => [
  <Route path="/" key="1" render={() => <Redirect to="/list" />} component={TopicList} exact />,
  <Route path="/list" key="2" component={TopicList} />,
  <Route path="/detail" key="3" component={TopicDetail} />,
]
