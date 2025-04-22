import { useParams } from "react-router-dom"
import { Header } from "../components/header"
import { DateTimePicker } from "../components/date-time-picker"
import React from "react";

export default function ProfessionalPage() {
    const { serviceId, professionalId } = useParams<{ serviceId: string; professionalId: string }>()

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Selecione um Horário</h1>
                <DateTimePicker serviceId={serviceId || ""} professionalId={professionalId || ""} />
            </div>
        </main>
    )
}
