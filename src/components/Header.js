import Head from 'next/head'
import React, { Component } from 'react'

export default class Header extends Component {
   render() {
      return (
         <div>
            <Head>
            <title>{this.props.title}</title>
            <link rel="icon" href="favicon/favicon.ico" />
            <link
                  rel="preload"
                  href="/fonts/Anton-Regular.ttf"
                  as="font"
                  crossOrigin=""
               />
               <link
                  rel="preload"
                  href="/fonts/LuckiestGuy-Regular.ttf"
                  as="font"
                  crossOrigin=""
               />
            </Head>
         </div>
      )
   }
}