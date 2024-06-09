import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'chiens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('slug')
      table.string('name')
      table.string('thumbnail')
      table.string('couleurs')
      table.bigint('puce')
      table.string('tatouage')
      table.string('sexe')
      table.string('lof')
      table.string('cotation')
      table.string('prix')
      table.string('adn')
      table.string('tares')
      table.string('reserved').defaultTo('Non')
      table.string('vendu').defaultTo('Non')
      table.string('reproduction').defaultTo('Non')
      table.text('description')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
