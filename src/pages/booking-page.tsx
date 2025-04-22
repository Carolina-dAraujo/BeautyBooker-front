import { useParams } from "react-router-dom"
import { Header } from "../components/header"
import { ProfessionalsList } from "../components/professionals-list"
import React from "react"

export default function BookingPage() {
    const { serviceId } = useParams<{ serviceId: string }>()

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Profissionais Encontrados (2)</h1>
                <ProfessionalsList serviceId={serviceId || ""} />
            </div>
        </main>
    )
}