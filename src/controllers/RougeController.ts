import { Rouge } from "../entities/Rouge";
import { User } from "../entities/User";
import { GlobalContext } from "../GlobalContext";
import { ResponseResult } from "../response";

const create = async (name: string, context: GlobalContext): Promise<ResponseResult<Rouge>> => {
  if (!context.payload) {
    return {
      message: '请登录'
    }
  }
  const { id } = context.payload
  const user = await User.findOne({
    where: {
      id
    }
  })
  if (!user) {
    return {
      message: '请重新登录'
    }
  }
  const rouge = await Rouge.findOne({
    where: {
      name
    }
  })
  console.log(rouge)
  if (rouge) {
    return {
      message: '口红已经存在'
    }
  }
  try {
    const newRouge = await Rouge.create({
      name
    })
    newRouge.users = [user]
    newRouge.save()
    if (!newRouge) {
      return {
        message: '口红添加失败'
      }
    }
    return {
      message: '口红添加成功',
      entity: newRouge
    }
  } catch(err) {
    throw err
  }
}

export default {
  create
}