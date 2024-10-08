import React from 'react';

interface QuestionnaireResultsProps {
  data: any;
}

const QuestionnaireResults: React.FC<QuestionnaireResultsProps> = ({ data }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Questionnaire Results</h2>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value as string}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionnaireResults;