import { useState } from 'react'
import reactLogo from "./assets/react.svg"
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Card } from './components/ui/card'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "./pages/Login"
import Main from "./pages/Home"
function App() {
  return (
    <div class="bg-red-400">
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main/>} Main page />
        <Route path="/login" element={<Login/>} Login/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
