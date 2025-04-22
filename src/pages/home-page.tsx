import React from "react"
import { Header } from "../components/header"
import { ServiceSelection } from "../components/service-selection"

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Encontre seu serviço:</h1>
                <ServiceSelection />
            </div>
        </main>
    )
}
