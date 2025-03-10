import router from '@adonisjs/core/services/router'

const SignUpController = () => import('#controllers/auth/sign-up-controller')
router.get('/auth/sign-up', [SignUpController, 'show']).as('auth.sign-up.show')
router.post('/auth/sign-up', [SignUpController, 'handle']).as('auth.sign-up.handle')

const SignInController = () => import('#controllers/auth/sign-in-controller')
router.get('/auth/sign-in', [SignInController, 'show']).as('auth.sign-in.show')
router.post('/auth/sign-in', [SignInController, 'handle']).as('auth.sign-in.handle')

const ForgotPasswordController = () => import('#controllers/auth/forgot-password-controller')
router.get('/auth/forgot-password', [ForgotPasswordController, 'show']).as('auth.forgot-password.show')
router.post('/auth/forgot-password', [ForgotPasswordController, 'handle']).as('auth.forgot-password.handle')

const ResetPasswordController = () => import('#controllers/auth/reset-password-controller')
router.get('/auth/reset-password', [ResetPasswordController, 'show']).as('auth.reset-password.show')
router.post('/auth/reset-password', [ResetPasswordController, 'handle']).as('auth.reset-password.handle')

const GitHubController = () => import('#controllers/auth/github-controller')
router.get('/auth/github/redirect', [GitHubController, 'redirect']).as('auth.github.redirect')
router.get('/auth/github/callback', [GitHubController, 'callback']).as('auth.github.callback')
