import { Navbar } from './_component/navbar';
import { Sidebar } from './_component/sidebar/sidebar';

export default function DashboardLayout({ children }) {
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
