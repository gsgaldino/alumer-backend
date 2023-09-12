import { UserMemoryRepository } from '@/infra/repository'
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase'

describe('user/GetUserByEmail', () => {
  it('Deve buscar um usuário pelo email', async () => {
    const userMemoryRepository = new UserMemoryRepository()
    const getUserByEmailUseCase = new GetUserByEmailUseCase(userMemoryRepository)
    const userRepositorySpy = jest.spyOn(userMemoryRepository, 'findOneByEmail')
    const expectedEmail = 'johndoe@domain.com'

    const output = await getUserByEmailUseCase.execute(expectedEmail)

    expect(userRepositorySpy).toHaveBeenCalledWith(expectedEmail)
    expect(output).toBeDefined()
    expect(output?.email).toBe(expectedEmail)
  })
})
