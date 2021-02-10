import { Category } from "../entities/Category"
import { User } from "../entities/User"
import { GlobalContext } from "../GlobalContext"
import { ResponseResult } from "../response"

const create = async (name: string, description: string, context: GlobalContext): Promise<ResponseResult<Category>> => {
  try {
    if (!context.payload) {
      return {
        message: '请登录'
      }
    }
    const { id } = context.payload
    const user = User.findOne({
      where: {
        id
      }
    })
    if (!user) {
      return {
        message: '请重新登录'
      }
    }
    // 通过name获取是否存在已经有此name的分类
    const category = await Category.findOne({
      where: {
        name
      }
    })
    if (category) {
      return {
        message: '分类名称重复'
      }
    }
    const newCategory = await Category.create({
      name,
      description
    }).save()
    if (!newCategory) {
      return {
        message: '分类创建失败'
      }
    }
    return {
      message: '分类创建成功',
      entity: newCategory
    }
  } catch(e) {
    throw e
  }
}

export default {
  create  
}