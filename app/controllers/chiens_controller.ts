import Chien from '#models/chien'
import { cuid } from '@adonisjs/core/helpers'
import string from '@adonisjs/core/helpers/string'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ChiensController {
  async home({ inertia }: HttpContext) {
    return inertia.render('chiens/home')
  }
  async create({ request, response, inertia }: HttpContext) {
    const payload = request.only([
      'name',
      'couleurs',
      'puce',
      'tatouage',
      'sexe',
      'lof',
      'cotation',
      'adn',
      'tares',
      'reproduction',
      'description',
      'reserved',
      'vendu',
      'prix',
    ])

    const thumbnail = request.file('thumbnail')

    if (!thumbnail) {
      return response.badRequest({
        success: false,
        message: 'Thumbnail is required',
      })
    }

    await thumbnail?.move(app.makePath('public/uploads'), {
      name: `${cuid()}.${thumbnail.extname}`,
    })

    const slug = string.slug(payload.name)

    await Chien.create({
      slug: slug,
      name: payload.name,
      couleurs: payload.couleurs,
      puce: payload.puce,
      tatouage: payload.tatouage,
      sexe: payload.sexe,
      lof: payload.lof,
      cotation: payload.cotation,
      adn: payload.adn,
      tares: payload.tares,
      reproduction: payload.reproduction,
      description: payload.description,
      thumbnail: thumbnail?.fileName,
      reserved: payload.reserved,
      vendu: payload.vendu,
      prix: payload.prix,
    })

    return inertia.render('chiens/create')
  }

  async all({ response }: HttpContext) {
    const chiens = await Chien.all()
    return response.ok(chiens)
  }

  async show({ params, inertia }: HttpContext) {
    const chien = await Chien.findByOrFail('slug', params.slug)
    return inertia.render('chiens/show', { chien })
  }
}
