import { gql } from "apollo-server-express";

export default gql`
  type Category {
    id: ID!
    name: String!
    description: String
  }

  union CategoryResult = Category | ResponseResult

  extend type Mutation {
    createCategory(name: String!, description: String): CategoryResult
  }
`