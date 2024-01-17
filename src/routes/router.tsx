import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Dashboard from "../pages/dashboard"
import Checkin from "../pages/checkin"
import Stats from "../pages/stats"
import Transactions from "../pages/transactions"
import Inside from "../pages/inside"
import Karaoke from "../pages/karaoke"

export default function RouterManager() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/checkin/:id" element={<Checkin />} />
                <Route path="/karaoke/:barid" element={<Karaoke />} />
                <Route path="/inside/:barid" element={<Inside />} />
            </Routes>
        </Router>
    )
}
