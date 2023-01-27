import Image from "next/image";
import heroImage from '../assets/mainhero.jpeg';


export default function Hero(){
    return(
        <section >
            <section >
                <h1 >Rick And Morty</h1>
                <h3>Experience the Interdimensional Adventures of Rick and Morty</h3>
                {/* <h3>Join Rick, Morty, and the rest of the Smith family on their wild rides through the multiverse</h3> */}
            </section>
            <section >
                <Image src={heroImage} alt='heroRickAndMorty' />
            </section>
    </section>
    )
}