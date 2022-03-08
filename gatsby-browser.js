/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "./src/apollo/client"
import AuthState from "./src/context/auth/authState"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthState>{element}</AuthState>
  </ApolloProvider>
)
