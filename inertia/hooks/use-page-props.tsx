import { usePage } from '@inertiajs/react'

export function usePageProps<T>() {
  const { props } = usePage()

  return props as T
}
