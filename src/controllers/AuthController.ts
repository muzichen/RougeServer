import bcrypt from 'bcrypt'
import { User } from "../entities/User";
import { GlobalContext } from '../GlobalContext';
import { AuthResponse } from "../response";
import { createAccessToken, createRefreshToken } from '../utils/auth';

const login = async (email: string, password: string, { res }: GlobalContext): Promise<AuthResponse> => {
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

  if (!passwordIsRight) {
    return {
      message: '密码有误'
    }
  }

  res.cookie('jrt', createRefreshToken(user), {
    httpOnly: true
  })

  // jwt
  const accessToken = createAccessToken(user)

  return {
    message: '登录成功',
    token: accessToken,
    user
  }
}

export default {
  login
}