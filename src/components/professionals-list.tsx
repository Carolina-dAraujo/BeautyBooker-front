import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import React from "react"

const professionals = {
    "hair-styling": [
        {
            id: "sophia-lee",
            name: "Sophia Lee",
            specialty: "Especialista em cortes modernos",
            experience: "8 anos de experiência",
            image: "/placeholder.svg",
        },
        {
            id: "jason-kim",
            name: "Jason Kim",
            specialty: "Expert em hair coloring",
            experience: "7 anos de experiência",
            image: "/placeholder.svg",
        },
    ],
    manicure: [
        {
            id: "emily-roberts",
            name: "Emily Roberts",
            specialty: "Especialista em nail art",
            experience: "6 anos de experiência",
            image: "/placeholder.svg",
        },
        {
            id: "michael-adams",
            name: "Michael Adams",
            specialty: "Expert em acrylic treatments",
            experience: "10 anos de experiência",
            image: "/placeholder.svg",
        },
    ],
    makeup: [
        {
            id: "dr-alan-smith",
            name: "Dr. Alan Smith",
            specialty: "Expert em dermatologia",
            experience: "Graduado em Harvard",
            image: "/placeholder.svg",
        },
        {
            id: "dr-maria-lee",
            name: "Dr. Maria Lee",
            specialty: "Especialista em saúde facial",
            experience: "Certificada Premier",
            image: "/placeholder.svg",
        },
    ],
    facial: [
        {
            id: "dr-alan-smith",
            name: "Dr. Alan Smith",
            specialty: "Expert em dermatologia",
            experience: "Graduado em Harvard",
            image: "/placeholder.svg",
        },
        {
            id: "dr-maria-lee",
            name: "Dr. Maria Lee",
            specialty: "Especialista em saúde facial",
            experience: "Certificada Premier",
            image: "/placeholder.svg",
        },
    ],
    waxing: [
        {
            id: "emily-roberts",
            name: "Emily Roberts",
            specialty: "Especialista em nail art",
            experience: "6 anos de experiência",
            image: "/placeholder.svg",
        },
        {
            id: "michael-adams",
            name: "Michael Adams",
            specialty: "Expert em acrylic treatments",
            experience: "10 anos de experiência",
            image: "/placeholder.svg",
        },
    ],
    massage: [
        {
            id: "sophia-lee",
            name: "Sophia Lee",
            specialty: "Especialista em massagem terapêutica",
            experience: "8 anos de experiência",
            image: "/placeholder.svg",
        },
        {
            id: "jason-kim",
            name: "Jason Kim",
            specialty: "Expert em massagem desportiva",
            experience: "7 anos de experiência",
            image: "/placeholder.svg",
        },
    ],
}

export function ProfessionalsList({ serviceId }: { serviceId: string }) {
    const serviceProfessionals =
        professionals[serviceId as keyof typeof professionals] || professionals["hair-styling"]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceProfessionals.map((professional) => (
                <div key={professional.id} className="border rounded-lg overflow-hidden shadow-sm flex">
                    <div className="w-1/3">
                        <img
                            src={professional.image}
                            alt={professional.name}
                            className="object-cover w-full h-full"
                            style={{ height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="w-2/3 p-4">
                        <h3 className="font-semibold text-lg">{professional.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{professional.specialty}</p>
                        <p className="text-xs text-gray-500 mt-2">{professional.experience}</p>
                        <Link to={`/booking/${serviceId}/${professional.id}`}>
                            <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">Book Now</Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}