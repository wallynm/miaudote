import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from 'connected-next-router'
import App, { Container } from "next/app"
import withRedux from "next-redux-wrapper"
import { initStore } from "../store"
import Routes  from 'routes'

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
      console.info(ctx)
      let pageProps = {};

      if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
          pageProps.url = Routes.match(ctx.asPath);
      }

      

      console.info('AAA'. Component)
      console.info('bb', ctx.asPath)

      return {pageProps}
  }

    render() {
      const { Component, pageProps, store } = this.props

      console.info(pageProps)
      return (
        <Container>
          <Provider store={store}>
            <ConnectedRouter>
              <Component {...pageProps} />
            </ConnectedRouter>
          </Provider>
        </Container>
      )
    }
  }
)