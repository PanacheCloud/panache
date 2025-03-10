import { Link } from '@inertiajs/react'
import { usePath } from '~/hooks/use-path'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const path = usePath()
  const isActive = path === href

  return (
    <Link
      className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
        isActive
          ? 'text-neutral-900 bg-neutral-200'
          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
      }`}
      href={href}
    >
      {children}
    </Link>
  )
}
