import { gql } from "apollo-server-express";

export default gql`
  type Rouge {
    id: ID!
    name: String!
  }

  union RougeResult = Rouge | ResponseResult

  extend type Mutation {
    createRouge(name: String!): RougeResult
  }
`