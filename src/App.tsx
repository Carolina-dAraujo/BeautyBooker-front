import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import HomePage from "./pages/home-page"
import BookingPage from "./pages/booking-page"
import ProfessionalPage from "./pages/professional-page"
import DateTimePage from "./pages/date-time-page"
import ConfirmationPage from "./pages/confirmation-page"
import React from "react"

function App() {
  return (
      <ThemeProvider defaultTheme="light">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking/:serviceId" element={<BookingPage />} />
          <Route path="/booking/:serviceId/:professionalId" element={<ProfessionalPage />} />
          <Route
              path="/booking/:serviceId/:professionalId/datetime"
              element={<DateTimePage/>}
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </ThemeProvider>
  )
}

export default App
