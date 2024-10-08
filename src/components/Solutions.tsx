import React from 'react';

const Solutions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Proposed Solutions</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No-Code Applications</h3>
          <ul className="list-disc list-inside">
            <li>Customer Relationship Management</li>
            <li>Project Management</li>
            <li>Inventory Tracking</li>
          </ul>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">AI-Powered Systems</h3>
          <ul className="list-disc list-inside">
            <li>24/7 AI Chatbot for Customer Support</li>
            <li>AI-Driven Sales Outreach</li>
            <li>Predictive Analytics for Decision Making</li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Scalable Systems Architecture</h3>
          <ul className="list-disc list-inside">
            <li>Cloud-Based Infrastructure</li>
            <li>Microservices Architecture</li>
            <li>API-First Approach</li>
          </ul>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
          <ul className="list-disc list-inside">
            <li>Automated Invoice Processing</li>
            <li>Employee Onboarding Workflow</li>
            <li>Supply Chain Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solutions;