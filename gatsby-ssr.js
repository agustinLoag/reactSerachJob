/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "./src/apollo/client"
import AuthContext from "./src/context/auth/authContext"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthContext>{element}</AuthContext>
  </ApolloProvider>
)
