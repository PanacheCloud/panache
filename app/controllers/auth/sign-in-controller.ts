import type { HttpContext } from '@adonisjs/core/http'

export default class SignInController {
  show({ inertia }: HttpContext) {
    return inertia.render('auth/sign-in')
  }

  async handle({}: HttpContext) {}
}
