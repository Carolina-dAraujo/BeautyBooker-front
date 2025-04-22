import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import React from "react"

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

export default function DateTimePage() {
    const { serviceId, professionalId } = useParams<{ serviceId: string; professionalId: string }>();
    const navigate = useNavigate()
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const handleBooking = () => {
        if (date && selectedTime) {
            // Formatar a data para YYYY-MM-DD
            const formattedDate = date.toISOString().split("T")[0]

            // Redirecionar para a página de confirmação
            navigate(
                `/confirmation?service=${serviceId}&professional=${professionalId}&date=${formattedDate}&time=${encodeURIComponent(selectedTime)}`,
            )
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-4 shadow-sm">
                <h2 className="font-semibold text-lg mb-4">Selecione uma data</h2>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => {
                        // Desabilitar datas passadas e domingos
                        const now = new Date()
                        now.setHours(0, 0, 0, 0)
                        return date < now || date.getDay() === 0
                    }}
                />
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
                <h2 className="font-semibold text-lg mb-4">Selecione um horário</h2>
                <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                        <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                        >
                            {time}
                        </Button>
                    ))}
                </div>

                <Button className="w-full mt-8" disabled={!date || !selectedTime} onClick={handleBooking}>
                    Confirmar Agendamento
                </Button>
            </div>
        </div>
    )
}
