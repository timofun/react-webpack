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
    <Route path="/" key="1" render={() => <Redirect to="/list" />} exact />,
    <Route path="/list" key="2" component={TopicList} />,
    <Route path="/detail" key="3" component={TopicDetail} />,
    <Route path="/test" component={TestApi} key="test" />
  </Switch>
)
