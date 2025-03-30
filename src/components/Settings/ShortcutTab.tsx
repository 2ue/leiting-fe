import React from 'react';

const ShortcutTab: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">快捷键设置</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">全局搜索</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Ctrl+K"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">新建文件</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Ctrl+N"
        />
      </div>
    </div>
  );
};

export default ShortcutTab;