import { Post } from '#models/post'
import { Link } from '@inertiajs/react'
import { PublicLayout } from '~/components/public-layout'

export default function PostsIndexPage({ posts }: { posts: Post[] }) {
  return (
    <PublicLayout>
      <hgroup className="mx-auto flex flex-col items-center gap-1 w-full max-w-xl">
        <h2 className="font-serif text-4xl italic text-center">The Panache Dispatch</h2>
        <p className="text-base text-center text-neutral-700">
          Read our latest technical articles.
        </p>
      </hgroup>
      <hr className="border-neutral-300 w-full mt-4" />
      <PostsGrid posts={posts} />
    </PublicLayout>
  )
}

function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none">
      {posts.map((post) => (
        <article key={post.slug} className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            {post.imageUrl ? (
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] max-h-48 w-full rounded-md bg-neutral-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            ) : null}
            <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-neutral-900/10" />
          </div>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-neutral-500">
                {post.date}
              </time>
              <span className="relative z-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {post.category}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p
                className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-600"
                dangerouslySetInnerHTML={{ __html: post.summary }}
              />
            </div>
            <div className="relative mt-4 flex items-center gap-x-4">
              <img
                src={post.authorImage}
                alt=""
                className="h-10 w-10 rounded-full bg-neutral-100"
              />
              <div className="leading-6">
                <p className="text-sm font-semibold text-neutral-900">
                  <span className="absolute inset-0" />
                  {post.author}
                </p>
                <p className="text-neutral-600 text-xs">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
