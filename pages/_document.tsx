import { Html, Head, Main, NextScript } from 'next/document'
import GAScript from "../components/GAScript";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <GAScript/>
        <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
