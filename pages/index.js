import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import { ApolloProvider, gql } from '@apollo/client'
import App from '../container/App'
import client from '../apollo-client'
import Page from '../components/Page'
import heroImage from '../assets/rickAndMorty1.jpeg';
import Hero from '../components/Hero'

export default function Home() {

  return (
    <div>
      <Hero />
    </div>
  )
};