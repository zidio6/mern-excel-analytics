import { useState } from 'react'
import './App.css'
import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App
