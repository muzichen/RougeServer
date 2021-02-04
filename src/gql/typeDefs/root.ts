import { gql } from "apollo-server-express";

export default gql`
  type ResponseResult {
    message: String!
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`
