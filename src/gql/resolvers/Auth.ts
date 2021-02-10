import AuthController from "../../controllers/AuthController"
import { GlobalContext } from "../../GlobalContext"
import { AuthResponse } from "../../response"

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
      },
      context: GlobalContext
    ): Promise<AuthResponse> => {
      // todo
      try {
        const result = await AuthController.login(args.email, args.password, context)
        if (result.token) {
          return result
        }
        return {
          message: result.message ? result.message : 'An error occurred'
        }
      } catch (ex) {
        throw ex
      }
    }
  }
}