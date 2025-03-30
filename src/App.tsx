import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalSearch from '@/components/GlobalSearch';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalSearch />
      <Outlet />
    </div>
  );
}
export default App

