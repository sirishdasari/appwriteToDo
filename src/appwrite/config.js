import { Client, Graphql } from "appwrite";

// initialize SDK
const client = new Client();
client
    .setEndpoint('http://64.227.178.153/v1')
    .setProject('641aa146f117942c8c52');

export const graphql = new Graphql(client);