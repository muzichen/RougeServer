import bcrypt from 'bcrypt'
import { User } from "../entities/User";
import { ResponseResult } from "../response";

const login = async (email: string, password: string): Promise<ResponseResult<User>> => {
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
  if (!user) {
    return {
      message: '该用户不存在'
    }
  }
  const passwordIsRight = await bcrypt.compare(password, user.password)
  if (passwordIsRight) {
    return {
      message: '登录成功',
      entity: user
    }
  }
  return {
    message: '登录失败'
  }
}

export default {
  login
}