import { Link } from '@inertiajs/react'
import { DiscordIcon, GitHubIcon } from './icons'

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="text-sm px-3 py-1.5 rounded-md transition-colors" href={href}>
      {children}
    </Link>
  )
}

export function Header() {
  return (
    <header className="py-2 px-4 text-xs bg-neutral-100 border-b border-neutral-300">
      <div className="w-full justify-between flex items-center gap-2 flex-wrap">
        <div className="flex flex-wrap items-center gap-6">
          <h1 className="text-2xl italic font-serif">Panache Cloud</h1>
          <nav className="flex flex-wrap gap-4">
            <NavLink href="/">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/documentation">Documentation</NavLink>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a className="hover:opacity-80 transition-opacity" href="https://discord.gg/HP5ptHsS32">
            <DiscordIcon className="w-5 h-5 fill-neutral-700" />
          </a>
          <a className="hover:opacity-80 transition-opacity" href="https://github.com/panachecloud">
            <GitHubIcon className="w-5 h-5 fill-neutral-700" />
          </a>
          <Link className="btn btn-secondary" href="/log-in">
            Log in
          </Link>
          <Link className="btn btn-primary" href="/sign-up">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}
