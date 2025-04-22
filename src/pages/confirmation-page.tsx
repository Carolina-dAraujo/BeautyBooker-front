import { useSearchParams, Link } from "react-router-dom"
import { Header } from "../components/header"
import { Button } from "../components/ui/button"
import { CheckCircle } from "lucide-react"
import React from "react"

const serviceNames: Record<string, string> = {
    "hair-styling": "Hair Styling",
    manicure: "Manicure",
    makeup: "Makeup",
    facial: "Facial",
    waxing: "Waxing",
    massage: "Massage",
}

const professionalNames: Record<string, string> = {
    "sophia-lee": "Sophia Lee",
    "jason-kim": "Jason Kim",
    "emily-roberts": "Emily Roberts",
    "michael-adams": "Michael Adams",
    "dr-alan-smith": "Dr. Alan Smith",
    "dr-maria-lee": "Dr. Maria Lee",
}

export default function ConfirmationPage() {
    const [searchParams] = useSearchParams()

    const serviceId = searchParams.get("service") || ""
    const professionalId = searchParams.get("professional") || ""
    const date = searchParams.get("date") || ""
    const time = searchParams.get("time") || ""

    const formattedDate = date ? new Date(date).toLocaleDateString("pt-BR") : ""

    const serviceName = serviceNames[serviceId] || serviceId
    const professionalName = professionalNames[professionalId] || professionalId

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-8 max-w-md">
                <div className="border rounded-lg p-6 shadow-sm text-center">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>

                    <h1 className="text-2xl font-bold mb-6">Agendamento Confirmado!</h1>

                    <div className="space-y-4 text-left mb-8">
                        <div className="border-b pb-2">
                            <p className="text-sm text-gray-500">Serviço</p>
                            <p className="font-medium">{serviceName}</p>
                        </div>

                        <div className="border-b pb-2">
                            <p className="text-sm text-gray-500">Profissional</p>
                            <p className="font-medium">{professionalName}</p>
                        </div>

                        <div className="border-b pb-2">
                            <p className="text-sm text-gray-500">Data</p>
                            <p className="font-medium">{formattedDate}</p>
                        </div>

                        <div className="border-b pb-2">
                            <p className="text-sm text-gray-500">Horário</p>
                            <p className="font-medium">{time}</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link to="/">
                            <Button className="w-full bg-rose-600 hover:bg-rose-700">Voltar para Home</Button>
                        </Link>

                        <Button variant="outline" className="w-full">
                            Adicionar ao Calendário
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}