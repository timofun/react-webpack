import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import TopicList from '../views/toppic-list'
import TopicDetail from '../views/topic-detail'
import TestApi from '../views/test/api.test'

export default () => (
  <Switch>
    <Route path="/" key="default" render={() => <Redirect to="/list" />} exact />,
    <Route path="/list" key="list" component={TopicList} />,
    <Route path="/detail" key="detail" component={TopicDetail} />,
    <Route path="/test" component={TestApi} key="test" />
  </Switch>
)
