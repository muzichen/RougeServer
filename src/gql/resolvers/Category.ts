import CategoryController from "../../controllers/CategoryController"
import { Category } from "../../entities/Category"
import { GlobalContext } from "../../GlobalContext"
import { ResponseResult } from "../../response"

export default {
  CategoryResult: {
    __resolveType (obj: any, context: any, info: any) {
      if (obj.message) {
        return 'ResponseResult'
      }
      return 'Catgegory'
    }
  },
  Mutation: {
    createCategory: async (
      parent: any,
      args: {
        name: string,
        description: string
      },
      context: GlobalContext
    ): Promise<ResponseResult<Category>> => {
      console.log(args)
      try {
        let result = await CategoryController.create(args.name, args.description, context)
        if (result.entity) {
          return result
        }
        return {
          message: result.message ? result.message : 'An error occurred'
        }
      } catch(ex) {
        throw ex
      }
    }
  }
}