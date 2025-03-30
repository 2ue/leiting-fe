import React, { useState } from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen">
      {/* 顶部导航 */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow z-10">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">顶部导航</h1>
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
            {isMenuOpen ? '隐藏菜单' : '显示菜单'}
          </button>
        </div>
      </div>
      {/* 左侧菜单 */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-64 bg-gray-800 text-white pt-16`}>
        <ul className="space-y-2 p-4">
          <li><a href="#" className="block hover:bg-gray-700 p-2 rounded">菜单项1</a></li>
          <li><a href="#" className="block hover:bg-gray-700 p-2 rounded">菜单项2</a></li>
          <li><a href="#" className="block hover:bg-gray-700 p-2 rounded">菜单项3</a></li>
        </ul>
      </div>
      {/* 内容区域 */}
      <div className="flex-1 p-16 pt-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;