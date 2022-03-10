import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Tem'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import { Ph } from "./pages/Ph"
import { Tem } from "./pages/Tem"
import { variance } from "simple-statistics"

function App() {

    const data1 = variance([1, 2, 3, 4, 5, 6])

    console.log(data1)

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
