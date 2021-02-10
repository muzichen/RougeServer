import { gql } from "apollo-server-express";

export default gql`
  type ResponseResult {
    message: String!
  }

  type AuthResponse {
    message: String
    user: User!
    token: String!
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`
