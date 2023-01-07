import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import { ApolloProvider, gql } from '@apollo/client'
import App from '../container/App'
import client from '../apollo-client'
import Page from '../components/Page'
import heroImage from '../assets/rickAndMorty1.jpeg';

export default function Home() {

  return (
    <section className={`${styles.container} ${styles.heroSection}`}>
      <section className={styles.leftSection}>
        <h1>Rick And Morty</h1>
        <h3>Experience the Interdimensional Adventures of Rick and Morty</h3>
        <h3>Join Rick, Morty, and the rest of the Smith family on their wild rides through the multiverse</h3>
      </section>
      <section className={styles.rightSection}>
        <Image src={heroImage} alt='heroRickAndMorty' />
      </section>
    </section>
  )
};