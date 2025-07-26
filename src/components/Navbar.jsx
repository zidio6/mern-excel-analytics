
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Excel Analytics</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </nav>
  );
}


