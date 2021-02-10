import { Request, Response } from "express";

export class GlobalContext {
  constructor(
    public req: Request,
    public res: Response,
    public payload: any
  ) {}
}