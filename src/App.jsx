import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Tem'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import { Ph } from "./pages/Ph"
import { Tem } from "./pages/Tem"
import { useCalculo } from './hook/useCalculo'
import { variance } from "simple-statistics"
import { usePeticionHook } from "./hook/usePeticionHook"

function App() {




    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="ph" element={<Ph />} />
                    <Route path="tem" element={<Tem />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
