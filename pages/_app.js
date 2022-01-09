import '../styles/globals.scss'
import '../styles/bootstrap/bootstrap.scss'
import Head from 'next/head'
import {  RecoilRoot,  atom,  selector,  useRecoilState,  useRecoilValue,} from 'recoil';
import Nav from '../components/navigation/Nav';


function MyApp({ Component, session, pageProps }) {
  return (
      <RecoilRoot>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <Component {...pageProps} />
      </RecoilRoot>
  )
}

export default MyApp
