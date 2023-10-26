import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ModeToggle } from "../ui/theme-toggle"

export const Navbar = () => {
    return (
        <>
            <div className={cn("h-full flex-col md:flex sticky top-0 shadow-md ",'bg-gray-100 dark:bg-slate-900')}>
                <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                    <h2 className="text-lg font-semibold">Kok Fong</h2>
                    <nav
                        className={cn("flex items-center space-x-4 lg:space-x-6", "mx-6")}
                    >
                        <Link
                            href="#home"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            About
                        </Link>
                        <Link
                            href="#project"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Contact
                        </Link>
                        <ModeToggle/>
                    </nav>
                </div>
                
                {/* <Separator /> */}
            </div>
        </>
    )
}