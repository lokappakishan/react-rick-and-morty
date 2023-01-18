import Page from "../components/Page";
import '../styles/globals.scss';
import client from "../apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
        <Page>
          <Component {...pageProps} />
      </Page>
    </ApolloProvider>
    
  )
}
