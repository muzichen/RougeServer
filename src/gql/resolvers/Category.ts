import CategoryController from "../../controllers/CategoryController"
import { Category } from "../../entities/Category"
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
      }
    ): Promise<ResponseResult<Category>> => {
      console.log(args)
      try {
        let result = await CategoryController.create(args.name, args.description)
        if (result.entity) {
          return {
            message: '创建成功',
            entity: result.entity
          }
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