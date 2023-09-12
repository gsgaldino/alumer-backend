import type { HttpServerParamsDictionary as P } from '@/infra/interfaces'
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase'

export class GetUserByEmailController {
  constructor(private readonly useCase: GetUserByEmailUseCase) {}

  async execute(params: P) {
    const email = params.email
    const output = await this.useCase.execute(email)
    return output
  }
}
