import { GetAllUsersUseCase } from './GetAllUsersUseCase'

export class GetAllUsersController {
  constructor(private readonly useCase: GetAllUsersUseCase) {}

  async execute() {
    return this.useCase.execute()
  }
}
