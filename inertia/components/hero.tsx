import { Link } from '@inertiajs/react'
import { GitHubIcon } from './icons'

export function Hero() {
  return (
    <section className="space-y-4">
      <h1 className="font-serif text-4xl italic">A developers-first cloud platform.</h1>
      <div className="flex flex-wrap gap-2">
        <Link className="btn btn-primary" href="/sign-up">
          Get started (it's free) →
        </Link>
        <a className="btn btn-secondary" href="https://github.com/panachecloud">
          <GitHubIcon className="w-4 h-4" />
          <span>Explore GitHub repositories</span>
        </a>
      </div>
    </section>
  )
}
