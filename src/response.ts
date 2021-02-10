import { User } from "./entities/User";

export class ResponseResult<T> {
  constructor(
    public message?: string,
    public entity?: T
  ) {}
}

export class AuthResponse {
  constructor(
    public token?: string,
    public user?: User,
    public message?: string
  ) {}
}