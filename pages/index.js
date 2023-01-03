import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ApolloProvider, gql } from '@apollo/client'
import App from '../components/App'
import client from '../apollo-client'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
