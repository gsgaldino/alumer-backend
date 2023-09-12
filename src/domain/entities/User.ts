import { IUser, IArtifact, IBadge, ITeam } from '@/types'

export class User {
  private avatarUrl: string
  private email: string
  private password: string
  private firstname: string
  private lastname: string
  private nick: string
  private role: string
  private artifacts?: IArtifact[]
  private eventsCounter: {
    incredible: number
    pingucos: number
  }
  private alumecas: {
    balance: number
    lastUpdateAt: number
  }
  private since: number
  private team: ITeam[]
  private badges: IBadge[]

  constructor(readonly user: IUser) {
    this.avatarUrl = user.avatarUrl || ''
    this.email = user.email
    this.firstname = user.firstname
    this.lastname = user.lastname
    this.nick = user.nick
    this.role = user.role || ''
    this.artifacts = user.artifacts || []
    this.eventsCounter = user.eventsCounter || {
      incredible: 0,
      pingucos: 0
    }
    this.alumecas = user.alumecas || {
      balance: 0,
      lastUpdateAt: 0
    }
    this.since = user.since || 0
    this.team = user.team || []
    this.badges = user.badges || []
    this.password = user.password
  }
}
