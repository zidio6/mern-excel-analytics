import React from 'react'
import UploadPanel from './UploadPanel';
import ChartPanel from './ChartPanel';
import HistoryPanel from './HistoryPanel';

export default function Dashboard() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <UploadPanel />
      <ChartPanel />
      <HistoryPanel />
    </div>
  );
}


