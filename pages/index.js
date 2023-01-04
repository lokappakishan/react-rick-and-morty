import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ApolloProvider, gql } from '@apollo/client'
import App from '../container/App'
import client from '../apollo-client'
import Page from '../components/Page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>home</>
  )
};