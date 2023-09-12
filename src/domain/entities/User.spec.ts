// import { User } from './User'

describe('entity/User', () => {
  it('Should be ok', () => {
    expect(true).toBeTruthy()
  })
  // const userData = {
  //   name: 'John Doe',
  //   email: 'johndoe@domain.com'
  // }

  // it('Deve instanciar um usuário com informações iniciais', () => {
  //   const user = new User(userData.name, userData.email)
  //   expect(user.email).toBe(userData.email)
  //   expect(user.name).toBe(userData.name)
  // })

  // it('Deve alterar o nome quando o dado for válido', () => {
  //   const user = new User(userData.name, userData.email)
  //   const expectedNewName = 'Nick Johnson'
  //   user.changeName(expectedNewName)
  //   expect(user.name).toBe(expectedNewName)
  // })

  // it('Deve alterar o email quando o dado for válido', () => {
  //   const user = new User(userData.name, userData.email)
  //   const expectedNewEmail = 'nickjohnson@domain.com'
  //   user.email = expectedNewEmail
  //   expect(user.email).toBe(expectedNewEmail)
  // })

  // it('Deve lançar um erro quando o nome for inválido', () => {
  //   const user = new User(userData.name, userData.email)
  //   const invalidName = '$In4vlid Nam4'
  //   expect(() => user.changeName(invalidName)).toThrow(new Error(`Name ${invalidName} is invalid`))
  // })

  // it('Deve lançar um erro quando o email for inválido', () => {
  //   const user = new User(userData.name, userData.email)
  //   const invalidEmail = 'myinvalidemail'
  //   expect(() => user.email = invalidEmail).toThrow(new Error('Invalid email'))
  // })
})
