import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const routes = [
    { name: '文件管理', path: '/file-manager' },
    { name: '设置', path: '/settings' },
    { name: 'Markdown编辑器', path: '/markdown' },
    { name: '无限画布', path: '/canvas' },
    { name: '思维导图', path: '/mindmap' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">菜单页面</h1>

      <div className="bg-white rounded-lg shadow p-4">
        <ul className="space-y-2">
          {routes.map((route) => (
            <li key={route.path}>
              <button
                onClick={() => navigate(route.path)}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-md text-gray-700 hover:text-gray-900 transition-colors"
              >
                {route.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;