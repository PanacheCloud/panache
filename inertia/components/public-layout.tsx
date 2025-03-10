import { Footer } from "./footer"
import { Header } from "./header"

export type PublicLayoutProps = {} & React.PropsWithChildren

export function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <>
        <Header />
        <main className="min-h-[calc(100vh-73px-93px)] sm:min-h-[calc(100vh-50px-53px)] max-w-2xl mx-auto px-4 sm:px-0 py-8 sm:py-16 space-y-8">
            {children}
        </main>
        <Footer />
        </>  
    )
}
