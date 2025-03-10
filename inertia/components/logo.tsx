import clsx from 'clsx'

export function Logo({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex font-serif italic text-3xl aspect-square size-12 items-center justify-center rounded-md bg-black text-white',
        className
      )}
      {...props}
    >
      P
    </div>
  )
}
