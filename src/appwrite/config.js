import { Client, Graphql } from "appwrite";

// initialize SDK
const client = new Client();
client
    .setEndpoint(process.env.REACT_APP_URL)
    .setProject(process.env.REACT_APP_ID);

export const graphql = new Graphql(client);