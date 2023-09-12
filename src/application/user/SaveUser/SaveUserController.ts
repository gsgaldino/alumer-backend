import { ZodError } from 'zod' // this class shouldn't recognize me, remove me

import { HttpServerParamsDictionary as P, HttpServerCallbackReturnType } from '@/infra/interfaces'
import { SaveUserUseCase } from './SaveUserUseCase'
import { userSchema } from '@/types/user'

export class SaveUserController {
  constructor(private readonly useCase: SaveUserUseCase) {}

  async execute(_: P, body: P): HttpServerCallbackReturnType {
    try {
      const dataTransferObject = userSchema.parse(body)
      console.log('DATA TRANSFER OBJECT', dataTransferObject)
      const output = await this.useCase.execute(dataTransferObject)
      return { status: 200, data: output }
    } catch (error) {
      if (error instanceof ZodError) return {
        status: 400,
        data: {
          success: false,
          issues: error.issues,
          message: 'Validation error'
        }
      }
      console.error(error)
      return { status: 500, data: { success: false, message: 'Unknown error' } }
    }
  }
}
