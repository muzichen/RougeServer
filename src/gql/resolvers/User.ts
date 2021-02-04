import UserController from "../../controllers/UserController"
import { User } from "../../entities/User"
import { ResponseResult } from "../../response"

export default {
  UserResult: {
    __resolveType(obj: any, context: any, info: any) {
      if (obj.message) {
        return 'ResponseResult'
      }
      return 'User'
    }
  },

  Mutation: {
    createUser: async (
      parent: any,
      args: {
        firstName?: string,
        lastName?: string,
        email: string,
        password: string
      }
    ): Promise<ResponseResult<User>> => {
      try {
        const result = await UserController.create(args.firstName, args.lastName, args.email, args.password)
        if (result.entity) {
          return {
            message: result.message,
            entity: result.entity
          }
        }
        return {
          message: result.message ? result.message: 'An error occurred'
        }
      } catch(ex) {
        throw ex
      }
    }
  }
}