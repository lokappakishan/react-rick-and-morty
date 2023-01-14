import Image from "next/image";
import heroImage from '../assets/mainhero.jpeg';
import styles from '../styles/Home.module.scss'


export default function Hero(){
    return(
        <section className={`${styles.container} ${styles.heroSection}`}>
            <section className={styles.leftSection}>
                <h1 className={`${styles.heroHeading}`}>Rick And Morty</h1>
                <h3>Experience the Interdimensional Adventures of Rick and Morty</h3>
                {/* <h3>Join Rick, Morty, and the rest of the Smith family on their wild rides through the multiverse</h3> */}
            </section>
            <section className={styles.rightSection}>
                <Image src={heroImage} alt='heroRickAndMorty' />
            </section>
    </section>
    )
}