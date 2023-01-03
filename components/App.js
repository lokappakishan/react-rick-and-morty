import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_CHARACTERS = gql`
    query {
        characters(page:1){
            info {
                count
                pages
                next
                prev
            }
            results{
                id
                name
                status
            }
        }
            
    }

`;

function App(){

    const {loading, error, data: {characters = []} = {}} = useQuery(GET_CHARACTERS);
    const {info, results} = characters;

    if(loading) return <p>LOADING...</p>
    if(error) return <p>Error: {error.message}</p>

    return(
    <div>
        { results && results.map((result) => 
        <div key={result.id}>
            <p>{`Name: ${result.name}`}</p>
            <p>{`Status: ${result.status}`}</p>
        </div>
        )}
    </div>)
}

export default App;