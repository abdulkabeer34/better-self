
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Nav } from "../nav"
import { ModeToggle } from "@/components/mode-toggle"
import { SiteFooter } from "../footer"
import { isAuthorized } from "@/lib/auth"

export default async function LandingLayout({ children }: { children: React.ReactNode }) {
    const isLoggedIn = await isAuthorized();

    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <Link href="/" className="font-bold">betterself</Link>

                    <nav className="flex items-center">
                        <ModeToggle />
                        {!isLoggedIn ? <>
                            <Link href="/login" className={cn(buttonVariants({ variant: "link", size: "sm" }), "px-4")}>Login</Link>
                            <Link href="/signup" className={cn(buttonVariants({ variant: "default", size: "sm" }), "px-4")}>Sign Up</Link>
                        </> : <Link href="/tasks" className={cn(buttonVariants({ variant: "default", size: "sm" }), "px-4")}>Dashboard</Link>
                        }
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
       
    )
}