import AuthController from "../../controllers/AuthController"
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
    login: async (
      parent: any,
      args: {
        email: string,
        password: string
      }
    ): Promise<ResponseResult<User>> => {
      // todo
      try {
        const result = await AuthController.login(args.email, args.password)
        return {
          message: result.message ? result.message : 'An error occurred'
        }
      } catch (ex) {
        throw ex
      }
    }
  }
}