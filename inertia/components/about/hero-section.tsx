import { Link } from '@inertiajs/react'
import { GitHubIcon } from '../icons'
import React from 'react'
import { Logo } from '~/components/logo'

export function HeroSection() {
  const [stars, setStars] = React.useState<number | null>(null)

  React.useEffect(() => {
    fetch('https://api.github.com/repos/panachecloud/panache')
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(null))
  }, [])

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <h1 className="font-serif text-4xl italic text-center">A developers-first cloud platform.</h1>
      <p className="text-neutral-500 text-center leading-loose">
        Breaking free from <u className="underline-offset-4">The Holy Trinity of Cloud™</u> (AWS,
        Azure, and GCP).
        <br />
        Bringing some <i>panache</i> back to your own servers.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-2">
        <Link className="btn btn-primary" href="/auth/sign-up">
          Get started (for free) →
        </Link>
        <a className="btn btn-secondary" href="https://github.com/panachecloud/panache">
          <GitHubIcon className="w-4 h-4" />
          <span>Star on GitHub</span>
          {stars && <span className="text-xs text-neutral-500">({stars})</span>}
        </a>
      </div>
    </section>
  )
}
