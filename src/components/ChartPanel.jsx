import React from 'react';

export default function ChartPanel() {
  return (
    <div className="bg-white rounded shadow p-4 col-span-2">
      <h2 className="text-lg font-semibold mb-4">Chart Preview</h2>
      <div id="chart-container" className="w-full h-64 bg-gray-50 flex items-center justify-center border rounded">
        <span className="text-gray-500">[Chart will appear here]</span>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded">Download PNG</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Download PDF</button>
      </div>
    </div>
  );
}

