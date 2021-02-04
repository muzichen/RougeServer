import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    rouges: [Rouge]
  }

  union UserResult = User | ResponseResult

  extend type Mutation {
    createUser(firstName: String, lastName: String, email: String, password: String): UserResult
  }
`