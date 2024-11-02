import { Html, Head, Main, NextScript   } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>

      <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
      />
       <link rel="stylesheet" href="styles.css" />

      </Head>

      <body 
      className='w-screen flex flex-col '
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/**
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
 * 
 */
