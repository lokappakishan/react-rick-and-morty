import Page from "../components/Page";
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return(
    <Page>
        <Component {...pageProps} />
    </Page>
  )
}
