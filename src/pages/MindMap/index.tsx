/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { MindMap } from '@ant-design/graphs';

const MindMapPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data] = useState<any>({
    "id": "Modeling Methods",
    "children": [
      {
        "id": "Classification",
        "children": [
          { "id": "Logistic regression" },
          { "id": "Linear discriminant analysis" },
          { "id": "Rules" },
          { "id": "Decision trees" },
          { "id": "Naive Bayes" },
          { "id": "K nearest neighbor" },
          { "id": "Probabilistic neural network" },
          { "id": "Support vector machine" }
        ]
      },
      {
        "id": "Consensus",
        "children": [
          {
            "id": "Models diversity",
            "children": [
              { "id": "Different initializations" },
              { "id": "Different parameter choices" },
              { "id": "Different architectures" },
              { "id": "Different modeling methods" },
              { "id": "Different training sets" },
              { "id": "Different feature sets" }
            ]
          },
          {
            "id": "Methods",
            "children": [
              { "id": "Classifier selection" },
              { "id": "Classifier fusion" }
            ]
          },
          {
            "id": "Common",
            "children": [
              { "id": "Bagging" },
              { "id": "Boosting" },
              { "id": "AdaBoost" }
            ]
          }
        ]
      },
      {
        "id": "Regression",
        "children": [
          { "id": "Multiple linear regression" },
          { "id": "Partial least squares" },
          { "id": "Multi-layer feedforward neural network" },
          { "id": "General regression neural network" },
          { "id": "Support vector regression" }
        ]
      }
    ]
  });
  const options = {
    type: 'linear',
    autoFit: 'view',
    data,
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">思维导图</h1>
      <div className="bg-white rounded-lg shadow w-full" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="p-4 h-full">
          {/* @ts-ignore */}
          <MindMap {...options} />;
        </div>
      </div>
    </div>
  );
};

export default MindMapPage;