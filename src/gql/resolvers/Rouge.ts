import RougeController from "../../controllers/RougeController";
import { Rouge } from "../../entities/Rouge";
import { GlobalContext } from "../../GlobalContext";
import { ResponseResult } from "../../response";

export default {
  RougeResult: {
    __resolveType (obj: any, context: any, info: any) {
      if (obj.message) {
        return 'ResponseResult'
      }
      return 'Rouge'
    }
  },
  Mutation: {
    createRouge: async (
      parent: any,
      args: {
        name: string
      },
      context: GlobalContext
    ): Promise<ResponseResult<Rouge>> => {
      try {
        const result = await RougeController.create(args.name, context)
        if (result.entity) {
          return result
        }
        return {
          message: result.message ? result.message : 'An error occurred'
        }
      } catch(err) {
        throw err
      }
    }
  }
}