// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'

export default class ElevagesController {
  async index({ inertia }: HttpContext) {
    return inertia.render('elevages/all')
  }
}
