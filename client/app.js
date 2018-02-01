/**
 * Created by Administrator on 2018/1/30.
 * function : xxxxx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './views/App'

const root = document.getElementById('root')
// ReactDOM.hydrate(<App />, document.getElementById('root'))

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}

render(App)
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}
