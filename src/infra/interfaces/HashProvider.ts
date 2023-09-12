type HashedValue = string

export interface HashProvider {
  hash(value: string): Promise<HashedValue>
  verify(hashed: HashedValue, value: string): Promise<boolean>
}
