import express, { application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import {
  HttpServer,
  HttpServerCallback,
  HttpServerMethod,
  HttpServerListenCallback,
} from '@/infra/interfaces'

export class ExpressHttpServerAdapter implements HttpServer {
  private app: typeof application

  constructor() {
    this.app = express()
    this.middlewares()
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  public on(method: HttpServerMethod, url: string, callback: HttpServerCallback): void {
    this.app[method](url, async (req: Request, res: Response) => {
      const output = await callback(req.params, req.body)
      res.status(output.status).json(output.data)
    })
  }

  public listen(port: number, callback: HttpServerListenCallback): void {
    this.app.listen(port)
    callback(port)
  }
}
