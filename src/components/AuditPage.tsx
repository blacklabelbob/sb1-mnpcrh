import React from 'react';
import Summary from './Summary';
import CurrentSystem from './CurrentSystem';
import FutureSystem from './FutureSystem';
import Solutions from './Solutions';
import Insights from './Insights';
import Implementation from './Implementation';

const AuditPage: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Systems Automation Audit</h1>
      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 bg-gray-200 rounded">Summary</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Current System</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Future System</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Solutions</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Insights</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Implementation</button>
      </div>
      <div className="space-y-8">
        <Summary />
        <CurrentSystem />
        <FutureSystem />
        <Solutions />
        <Insights />
        <Implementation />
      </div>
    </div>
  );
};

export default AuditPage;