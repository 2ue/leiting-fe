import React from 'react';

const AboutTab: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">关于</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">版本</label>
        <p className="text-sm text-gray-600">v1.0.0</p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">版权</label>
        <p className="text-sm text-gray-600">© 2023 Leiting Team. 保留所有权利。</p>
      </div>
    </div>
  );
};

export default AboutTab;