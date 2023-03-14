import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Team from '../pages/Team'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Clinic from '../pages/Clinic'
import LegalWarning from '../pages/LegalWarning'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Cookies from '../pages/Cookies'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/legalWarning" element={<LegalWarning />} />
            <Route path="/cookies" element={<Cookies />} />
        </Routes>
    )
}

export default Router
