/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')
const ChiensController = () => import('#controllers/chiens_controller')
import router from '@adonisjs/core/services/router'
router.get('/', [HomeController, 'index'])

router.post('/create', [ChiensController, 'create'])
router.get('/create', [ChiensController, 'home'])
router.get('/all', [ChiensController, 'all'])
router.get('/elevage/:slug', [ChiensController, 'show'])
