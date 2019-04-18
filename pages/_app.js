import App, {Container} from 'next/app'
import React from 'react';

import { library as fontawesome } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import {faWifi} from '@fortawesome/free-solid-svg-icons'
//import '@fortawesome/fontawesome-svg-core/styles.css'

fontawesome.add(fab, faWifi, faCheckSquare, faCoffee)

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps };
    }

    render() {
      const { Component, pageProps } = this.props;

      return (
        <Container>
            <Component {...pageProps} />
        </Container>
      );
    }
}

export default MyApp;

