import { HttpServer } from '@/infra/interfaces'
import {
  // getUserByEmailController,
  // getAllUsersController,
  saveUserController
} from '@/application/user'

export class Router {
  constructor(readonly httpServer: HttpServer) {}

  public init() {
    // this.httpServer.on('get', '/users', getAllUsersController.execute.bind(
    //   getAllUsersController
    // ))
    // this.httpServer.on('get', '/users/:email', getUserByEmailController.execute.bind(
    //   getUserByEmailController
    // ))
    this.httpServer.on('post', '/user', saveUserController.execute.bind(saveUserController))
  }
}
