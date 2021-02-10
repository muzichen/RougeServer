import express from 'express'
import dotEnv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import connection from './connection'
import typeDefs from './gql/typeDefs'
import resolvers from './gql/resolvers'
import { GlobalContext } from './GlobalContext'
import { isAuth } from './utils/auth'

const setUp = async () => {
  dotEnv.config()

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: any): GlobalContext => {
      const payload = isAuth(req)
      return { req, res, payload }
    }
  })
  
  const app = express()
  
  apolloServer.applyMiddleware({ app, path: '/graphql' })
  
  // 连接数据库
  await connection()
  console.log('连接数据库成功...')
  
  // app.get('/', (req: Request, res: Response) => {
  //   res.send('2113') p
  // })
  
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on Port ${process.env.SERVER_PORT}`)
  })
}

setUp()

