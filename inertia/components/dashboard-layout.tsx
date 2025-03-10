import { AlphaBanner } from '~/components/alpha-banner'

export type DashboardLayoutProps = {} & React.PropsWithChildren

export function DashboardLayout({children}: DashboardLayoutProps) {
    return (
        <>
        <AlphaBanner />
        <div>{children}</div>
        </>
    )
}