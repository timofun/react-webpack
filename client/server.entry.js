/**
 * Created by Administrator on 2018/1/30.
 * function : xxxxx
 */
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'

import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider } from 'material-ui/styles'

import App from './views/App'

import { createStoreMap } from './store/store'

// 让mobx在服务端渲染的时候不会重复数据变换
useStaticRendering(true)

// {appStore: xxx}
export default (stores, routerContext, sheetsRegistry, generateClassName, theme, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  </Provider>
)

export { createStoreMap }
