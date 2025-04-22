import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import React from "react"

const services = [
    {
        id: "hair-styling",
        name: "Hair Styling",
        description: "Expert haircuts and styling for all occasions",
        image: "/placeholder.svg",
        duration: "30-60 min",
    },
    {
        id: "manicure",
        name: "Manicure",
        description: "Beautiful nails with professional care",
        image: "/placeholder.svg",
        duration: "30-45 min",
    },
    {
        id: "makeup",
        name: "Makeup",
        description: "Perfect look for weddings and events",
        image: "/placeholder.svg",
        duration: "45-75 min",
    },
    {
        id: "facial",
        name: "Facial",
        description: "Rejuvenating treatments for glowing skin",
        image: "/placeholder.svg",
        duration: "45-60 min",
    },
    {
        id: "waxing",
        name: "Waxing",
        description: "Smooth skin with expert waxing services",
        image: "/placeholder.svg",
        duration: "20-60 min",
    },
    {
        id: "massage",
        name: "Massage",
        description: "Relax and unwind with professional massages",
        image: "/placeholder.svg",
        duration: "30-60 min",
    },
]

export function ServiceSelection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
                <div key={service.id} className="border rounded-lg overflow-hidden shadow-sm">
                    <div className="h-48">
                        <img
                            src={service.image}
                            alt={service.name}
                            className="object-cover w-full h-full"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                        <p className="text-xs text-gray-500 mt-2">Duration: {service.duration}</p>
                        <Link to={`/booking/${service.id}`}>
                            <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">Book Now</Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}