import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Chien extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare slug: string

  @column()
  declare name: string

  @column()
  declare thumbnail: string

  @column()
  declare couleurs?: string[]

  @column()
  declare puce?: number

  @column()
  declare prix?: number

  @column()
  declare reserved?: string

  @column()
  declare vendu?: string

  @column()
  declare tatouage?: string

  @column()
  declare sexe: string

  @column()
  declare lof?: string

  @column()
  declare cotation?: string

  @column()
  declare adn?: string

  @column()
  declare tares?: string

  @column()
  declare reproduction: string

  @column()
  declare description?: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
