'use client';
import { useEffect, useState } from 'react';
import DashboardNavbar from './_component/navbar/DashboardNavbar';
import Sidebar from './_component/sidebar/Siderbar';

export default function GlobalLayout({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : true; 
  });

  useEffect(() => {
 
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className='false flex h-screen bg-gray-50 dark:bg-gray-900 '>
       
      {isVisible && <Sidebar isVisible={isVisible} />}

      <div className='flex w-full flex-1 flex-col'>
        <DashboardNavbar toggleVisibility={toggleVisibility} toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
      </div>
    </div>
  );
}
