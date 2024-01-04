import { Navbar } from './_component/navbar';
import { Sidebar } from './_component/sidebar/sidebar';

export default function DashboardLayout({ children }) {
  return (
    <section className='min-h-screen md:flex'>
      <section className='hidden md:block'>
        <Sidebar />
      </section>
      <section className='w-full'>
        <Navbar />
        <main>{children}</main>
      </section>
    </section>
  );
}
