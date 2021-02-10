import { Request } from 'express';
import jsonwebtoken from 'jsonwebtoken'
import { User } from "../entities/User";

export const createAccessToken = (user: User) => {
  return jsonwebtoken.sign({
    id: user.id,
    email: user.email
  }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '1d'
  })
}

export const createRefreshToken = (user: User) => {
  return jsonwebtoken.sign({
    id: user.id
  }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: '7d'
  })
}

export const isAuth = (req: Request): any => {
  const authorization = req.headers['authorization'] || ''
  let payload 
  try {
    const token = authorization.split(" ")[1]
    if (!token) {
      payload = null
      return
    }
    payload = jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET!)
  } catch (err) {
    throw err
  }
  return payload
}