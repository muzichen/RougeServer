import { gql } from "apollo-server-express";

export default gql`
  type Rouge {
    id: ID!
    name: String!
  }
`