import React from 'react';

export default function UploadPanel() {
  return (
    <div className="bg-white rounded shadow p-4 col-span-1">
      <h2 className="text-lg font-semibold mb-4">Upload Excel File</h2>
      <input type="file" className="block w-full mb-4" />

      <h3 className="text-md font-semibold mb-2">Select Chart Type</h3>
      <select className="w-full border p-2 mb-4">
        <option>Bar</option>
        <option>Line</option>
        <option>Pie</option>
        <option>Scatter</option>
        <option>3D Column</option>
      </select>

      <h3 className="text-md font-semibold mb-2">Select X Axis</h3>
      <select className="w-full border p-2 mb-4">
        <option>Column A</option>
        <option>Column B</option>
      </select>

      <h3 className="text-md font-semibold mb-2">Select Y Axis</h3>
      <select className="w-full border p-2 mb-4">
        <option>Column C</option>
        <option>Column D</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Generate Chart</button>
    </div>
  );
}
