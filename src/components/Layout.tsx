import React from 'react';
import { Sidebar } from './Sidebar';
import { useSidebarStore } from '../store/sidebar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen } = useSidebarStore();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? 'ml-64' : 'ml-16'
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};