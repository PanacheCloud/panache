/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import './routes/auth.js'
import './routes/blog.js'

router.on('/').renderInertia('about')

const ServersController = () => import('#controllers/servers-controller')
router.resource('servers', ServersController)