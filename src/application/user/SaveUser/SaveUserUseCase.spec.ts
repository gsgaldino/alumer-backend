import { User } from '@/domain/entities'
import { UserMemoryRepository } from '@/infra/repository'
import { SaveUserUseCase } from './SaveUserUseCase'

describe('user/SaveUser', () => {
  it('Deve salvar um usuário', async () => {
    const userMemoryRepository = new UserMemoryRepository()
    const saveUserUseCase = new SaveUserUseCase(userMemoryRepository)
    const userRepositorySpy = jest.spyOn(userMemoryRepository, 'save')
    const expectedUser = new User('Niko Bellic', 'nikobellic@domain.com')

    const output = await saveUserUseCase.execute(expectedUser)

    expect(userRepositorySpy).toHaveBeenCalledWith(expectedUser)
    expect(output).toBeTruthy()
  })
})
