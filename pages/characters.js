import { gql, useQuery } from "@apollo/client";
import React from "react";

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
        }
    }
    
}


`;


const variables = {page:1};
export default function CharactersPage(){

    const {loading,error,data} = useQuery(GET_ALL_CHARACTERS,variables);
    const  {characters: {info: infoList,results: charactersList}} = data;

    console.log(infoList,charactersList);

    return(
    <p>characters Page</p>
    );
}