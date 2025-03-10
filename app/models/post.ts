import { MarkdownFile } from '@dimerapp/markdown'
import { toHtml } from '@dimerapp/markdown/utils'
import { Shiki, codeblocks } from '@dimerapp/shiki'

export class Post {
  declare title: string

  declare slug: string

  declare html: string

  declare summary: string

  declare category: string

  declare author: string

  declare authorRole: string

  declare authorImage: string

  declare date: string

  declare imageUrl: string | null

  static async fromMarkdown(slug: string, markdown: string, highlightCode = false): Promise<Post> {
    const md = new MarkdownFile(markdown)

    if (highlightCode) {
      const shiki = new Shiki()

      shiki.useTheme('github-dark')

      await shiki.boot()

      md.transform(codeblocks, shiki)
    }

    await md.process()

    const { contents, summary } = toHtml(md)

    const post = new Post()
    post.title = md.frontmatter.title
    post.slug = slug
    post.html = contents
    post.summary = summary ?? ''
    post.category = md.frontmatter.category ?? 'Uncategorized'
    post.author = md.frontmatter.author ?? 'Unknown'
    post.authorRole = md.frontmatter.authorRole ?? 'Unknown'
    post.authorImage = md.frontmatter.authorImage ?? 'https://github.com/dimerapp.png'
    post.date = md.frontmatter.date ?? new Date().toISOString().split('T')[0]
    post.imageUrl = md.frontmatter.imageUrl ?? null

    return post
  }
}
