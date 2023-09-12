import { UserMemoryRepository } from '@/infra/repository'
import { GetAllUsersUseCase } from './GetAllUsersUseCase'

describe('user/GetAllUsers', () => {
  it('Deve retornar uma lista de usuários', async () => {
    const userMemoryRepository = new UserMemoryRepository()
    const getAllUsersUseCase = new GetAllUsersUseCase(userMemoryRepository)
    const userRepositorySpy = jest.spyOn(userMemoryRepository, 'findAll')

    const output = await getAllUsersUseCase.execute()

    expect(userRepositorySpy).toHaveBeenCalled()
    expect(output).toBeDefined()
    expect(output).toHaveLength(1)
  })
})
