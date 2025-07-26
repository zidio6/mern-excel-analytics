import React from 'react';

export default function HistoryPanel() {
  return (
    <div className="bg-white rounded shadow p-4 col-span-3">
      <h2 className="text-lg font-semibold mb-4">Upload History</h2>
      <table className="w-full text-left border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">File Name</th>
            <th className="p-2">Date</th>
            <th className="p-2">Chart Type</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">sales_data.xlsx</td>
            <td className="p-2">2025-07-22</td>
            <td className="p-2">Bar</td>
            <td className="p-2"><button className="text-blue-600 hover:underline">View</button></td>
          </tr>
          <tr className="border-t">
            <td className="p-2">revenue_report.xlsx</td>
            <td className="p-2">2025-07-20</td>
            <td className="p-2">Line</td>
            <td className="p-2"><button className="text-blue-600 hover:underline">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

