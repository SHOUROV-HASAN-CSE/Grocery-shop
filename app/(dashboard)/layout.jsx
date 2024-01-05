'use client';
import { Navbar } from './_component/navbar';
import { Sidebar } from './_component/sidebar/sidebar';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function DashboardLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='min-h-screen lg:flex'>
      <section className='hidden lg:block'>
        <Sidebar />
      </section>
      <section className='w-full'>
        <Navbar />
        <main>{children}</main>
      </section>
    </section>
  );
}
