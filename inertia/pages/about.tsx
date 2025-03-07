import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Hero } from '~/components/hero'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-73px-93px)] sm:min-h-[calc(100vh-50px-53px)] max-w-3xl mx-auto px-4 sm:px-0 py-8 sm:py-16">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
