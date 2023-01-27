import Page from "../components/Layout";
import '../styles/globals.scss';
import client from "../apollo-client";
import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    
  )
}
