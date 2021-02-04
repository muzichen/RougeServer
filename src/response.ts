export class ResponseResult<T> {
  constructor(
    public message?: string,
    public entity?: T
  ) {}
}