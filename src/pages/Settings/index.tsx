import React, { useState } from 'react';
import BasicStyleTab from '@/components/Settings/BasicStyleTab';
import ShortcutTab from '@/components/Settings/ShortcutTab';
import AboutTab from '@/components/Settings/AboutTab';
import PluginTab from '@/components/Settings/PluginTab';

const tabs = [
  { name: '基础设置', component: <BasicStyleTab /> },
  { name: '快捷键', component: <ShortcutTab /> },
  { name: '插件', component: <PluginTab /> },
  { name: '关于', component: <AboutTab /> },
];

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">设置页面</h1>

      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            className={`py-2 px-4 font-medium ${activeTab === index ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default Settings;