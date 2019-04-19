import React from 'react'
import Head from 'next/head'

function Meta(props) {
  return <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
      </Head>
    </>
}

export default Meta;
