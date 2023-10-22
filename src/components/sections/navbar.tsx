import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>
            <div className="h-full flex-col md:flex">
                <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                    <h2 className="text-lg font-semibold">Kok Fong</h2>
                    <nav
                        className={cn("flex items-center space-x-4 lg:space-x-6", "mx-6")}
                    >
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Home
                        </Link>
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            About
                        </Link>
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                
                <Separator />
            </div>
        </>
    )
}