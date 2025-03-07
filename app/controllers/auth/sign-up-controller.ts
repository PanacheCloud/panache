import type { HttpContext } from '@adonisjs/core/http'

export default class SignUpController {
  show({ inertia }: HttpContext) {
    return inertia.render('auth/sign-up')
  }

  async handle({}: HttpContext) {}
}
