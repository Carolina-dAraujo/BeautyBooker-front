import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"
import React from "react"

export function Header() {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-rose-600">
                    BeautyBooker
                </Link>
                <nav className="flex space-x-6">
                    <Link
                        to="/"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-rose-600",
                            pathname === "/" ? "text-rose-600" : "text-gray-600",
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        to="/booking/1" // substitua "1" pelo ID real ou lógica que quiser
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-rose-600",
                            pathname.startsWith("/booking") ? "text-rose-600" : "text-gray-600",
                        )}
                    >
                        Booking
                    </Link>
                    <Link
                        to="/confirmation"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-rose-600",
                            pathname === "/confirmation" ? "text-rose-600" : "text-gray-600",
                        )}
                    >
                        Confirmation
                    </Link>
                </nav>
            </div>
        </header>
    )
}