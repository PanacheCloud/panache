import router from '@adonisjs/core/services/router'

const PostsController = () => import('#controllers/blog/posts-controller')
router.get('/blog', [PostsController, 'index']).as('blog.posts.index')
router.get('/blog/:slug', [PostsController, 'show']).as('blog.posts.show')
