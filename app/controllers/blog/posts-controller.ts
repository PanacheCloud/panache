import type { HttpContext } from '@adonisjs/core/http'
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'
import { Post } from '#models/post'

export default class PostsController {
  async index({ inertia }: HttpContext) {
    const postPaths = await readdir(join(cwd(), 'blog'))
    const posts = []

    for await (const postPath of postPaths) {
      const markdownContents = await readFile(join(cwd(), 'blog', postPath), 'utf8')
      const slug = postPath.replace('.md', '')
      const post = await Post.fromMarkdown(slug, markdownContents)
      posts.push(post)
    }

    return inertia.render('blog/posts/index', { posts })
  }

  async show({ params, inertia, response }: HttpContext) {
    const postPath = `${params.slug}.md`

    try {
      const markdownContents = await readFile(join(cwd(), 'blog', postPath), 'utf8')
      const post = await Post.fromMarkdown(params.slug, markdownContents, true)

      return inertia.render('blog/posts/show', { post })
    } catch (error) {
      return response.notFound('Post not found.')
    }
  }
}
