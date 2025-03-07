export function Footer() {
  return (
    <header className="p-4 text-xs bg-neutral-100 border-t border-neutral-300">
      <div className="max-w-3xl mx-auto w-full text-neutral-600 justify-between flex flex-wrap items-center gap-2">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Panache Cloud</span>. All
          rights reserved.
        </p>
        <p>Designed with ❤️ in 🇫🇷.</p>
      </div>
    </header>
  )
}
