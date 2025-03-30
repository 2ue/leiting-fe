import React from 'react';

const BasicStyleTab: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">基础设置</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">语言</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option>简体中文</option>
          <option>English</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">主题</label>
        <div className="flex space-x-4">
          <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-800">浅色</button>
          <button className="px-3 py-2 rounded-md bg-gray-800 text-white">深色</button>
        </div>
      </div>
    </div>
  );
};

export default BasicStyleTab;