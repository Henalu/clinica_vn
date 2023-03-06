import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Team from '../pages/Team'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Clinic from '../pages/Clinic'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clinic" element={<Clinic />} />
        </Routes>
    )
}

export default Router
