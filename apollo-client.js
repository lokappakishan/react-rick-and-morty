import { ApolloClient, InMemoryCache } from "@apollo/client";

const client  = new ApolloClient({
    uri: `https://rickandmortyapi.com/graphql`,
    cache: new InMemoryCache(),
});

export default client;

/*
cement :#262C3A
blue: #12B0C9
green: #C4DF5A
black: #000000

*/