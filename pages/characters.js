import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import React from "react";
import CharacterCard from "../components/CharacterCard";
import styles from "../styles/Home.module.scss";

const GET_ALL_CHARACTERS = gql`
query GetCharacters($page: Int){
    characters(page: $page){
        info{
            count
            pages
            next
            prev
        }
        results{
            id
            name
            image
        }
    }
    
}


`;


const variables = {page:1};
export default function CharactersPage(){

    const {loading,error,data} = useQuery(GET_ALL_CHARACTERS,variables);

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data found.</div>;
    }


    const  {characters: {info: infoList,results: charactersList}} = data;

    console.log(infoList,charactersList);

    return(
        <div className={`${styles.container}`}>
            {charactersList.map(function(character){
                return(
                    <div key={character.id}>
                        <Image src={character.image} alt={character.name} width={300} height={300}/>
                        <p>{character.name}</p>
                    </div>
                )
            })}
        </div>
    );
}