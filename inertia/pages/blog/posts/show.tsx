import { Post } from '#models/post'
import { Link } from '@inertiajs/react'
import { ArrowLeft } from 'lucide-react'
import { PublicLayout } from '~/components/public-layout'

export default function PostsShowPage({ post }: { post: Post }) {
  return (
    <PublicLayout>
    <div className="flex flex-col items-center space-y-2">
      <Link className="flex items-center justify-center" href="/blog">
        <span className="relative z-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to articles list</span>
        </span>
      </Link>
      <h1 className="font-serif text-4xl italic text-center">{post.title}</h1>
      <time dateTime={post.date} className="text-neutral-500">
        {post.date}
      </time></div>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PublicLayout>
  )
}
