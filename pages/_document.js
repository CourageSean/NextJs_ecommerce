import Document, { Html, Main, NextScript } from 'next/document';
import { Head } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='de'>
        <Head>
          <meta name='description' content='Sean NextJs Fullstack' />
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x'
            crossorigin='anonymous'
          ></link>
          <script
            src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
            integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4'
            crossorigin='anonymous'
          ></script>
          <script
            src='https://kit.fontawesome.com/a076d05399.js'
            crossorigin='anonymous'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
