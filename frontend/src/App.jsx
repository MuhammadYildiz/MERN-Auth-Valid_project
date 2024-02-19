import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { useState } from "react"
function App() {
    const [user, setUser] = useState(null)
    return (
        <>
            <BrowserRouter>
                <Navbar user= {user} setUser = {setUser} />
                <Routes>
                    <Route path="/" element={<Home user = {user} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
