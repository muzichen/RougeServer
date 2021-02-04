import bcrypt from 'bcrypt'
import { User } from "../entities/User";
import { ResponseResult } from "../response";

const create = async (
  firstName: string | undefined, 
  lastName: string | undefined, 
  email: string, 
  password: string): Promise<ResponseResult<User>> => {
  if (!email || !password) {
    return {
      message: '邮箱或者密码不能为空'
    }
  }
  const user = await User.findOne({
    where: {
      email
    }
  })
  if (user) {
    return {
      message: '该邮箱已经存在'
    }
  }
  try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword
    }).save()
    if (!newUser) {
      return {
        message: '用户添加失败',
      }
    }
    return {
      message: '用户添加成功',
      entity: newUser
    }
  } catch(ex) {
    throw ex
  }
}

export default {
  create
}