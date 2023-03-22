import { useEffect, useState } from "react";
import { graphql } from "../appwrite/config";

const useAuth = () => {
  const [user,setUser] = useState(null)
    // SIGNUP
    const signup = async (email, password, username) => {
      const response = await graphql.mutation({
        query: `mutation (
                  $email: String!,
                  $password: String!,
                  $name: String
              ) {
                  accountCreate(
                      userId: "unique()",
                      email: $email,
                      password: $password,
                      name: $name
                  ) {
                    _id
                  }
              }`,
        variables: {
          email: email,
          password: password,
          name: username,
        },
      });
  
      if (response.errors) {
        throw response.errors[0].message;
      }
    };

    // LOGIN
    const login = async (email, password) => {
      const response = await graphql.mutation({
        query: `mutation (
            $email: String!,
            $password: String!,
        ) {
          accountCreateEmailSession(
            email: $email,
            password: $password,
        ) {
            _id
          }
        }`,
        variables: {
          email: email,
          password: password,
        },
      });
  
      if (response.errors) {
        throw response.errors[0].message;
      }
    };
    const getCurrentUser = async () => {
      const response = await graphql.query({
        query: `query {
              accountGet {
                  _id
                  name
                  emailVerification
                  email
              }
          }`,
      });
      return response.data.accountGet;
    };

    useEffect(() => {
      const fetchUser = async () => {
        const userDetails = await getCurrentUser();
        setUser(userDetails);
      };
      fetchUser();
    }, []);

    // Logout
    const logout = async () => {
      const response = await graphql.mutation({
        query: `mutation {
              accountDeleteSession(
                  sessionId: "current"
              ) {
                  status
              }
          }`,
      });
    
      if (response.errors) {
        throw response.errors[0].message;
      }
    };
    return {
      signup,
      login,
      logout,
      user,
    };
  };
  
  export default useAuth;