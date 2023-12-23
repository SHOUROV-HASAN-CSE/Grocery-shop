'use client';
import { useEffect, useState } from 'react';
import DashboardNavbar from './_component/navbar/DashboardNavbar';
import Sidebar from './_component/sidebar/Siderbar';

export default function GlobalLayout({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className='false flex h-screen bg-gray-50 dark:bg-gray-900 '>
      {isVisible && <Sidebar />}

      <div className='flex w-full flex-1 flex-col'>
        <DashboardNavbar toggleVisibility={toggleVisibility} toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
      </div>
    </div>
  );
}
