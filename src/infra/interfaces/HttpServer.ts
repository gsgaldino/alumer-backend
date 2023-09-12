export type HttpServerMethod = 'get' | 'post' | 'delete' | 'put' | 'patch' | 'options'

export type HttpServerParamsDictionary = {
  [key: string]: string
}

export type HttpServerCallbackReturnType = Promise<{ status: number, data: unknown }>

export type HttpServerCallback = (
  params: HttpServerParamsDictionary,
  body: HttpServerParamsDictionary
) => HttpServerCallbackReturnType

export type HttpServerListenCallback = (port: number) => void

export interface HttpServer {
  on(method: HttpServerMethod, url: string, callback: HttpServerCallback): void
  listen(port: number, callback: HttpServerListenCallback): void
}
