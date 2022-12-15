import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import './index.css'
import Help from './pages/Help'
import Account from './pages/Account'
import Header from './components/Headers/Header'
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='help' element={<Help />} />
                <Route path='account' element={<Account />} />
            </Routes>
        </>
    )
}

export default App