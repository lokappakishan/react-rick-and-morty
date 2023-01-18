import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_ALL_CHARACTERS = gql`
    query GetCharacters($page: ID!){
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
            status
            gender
            image
        }
    }
    
}

`;


const variables = {page:1};
export default function CharactersPage(){

    const {loading,error,data} = useQuery(GET_ALL_CHARACTERS,variables);
    console.log(data);

    return(
    <p>characters Page</p>
    );
}