import { Navbar } from './_component/navbar/navbar';

export default function DashboardLayout({ children }) {
  return (
    <section className='min-h-screen gap-6 md:flex'>
      <section className='hidden'>Sidebar</section>
      <section className='w-full'>
        <Navbar />
        <main>{children}</main>
      </section>
    </section>
  );
}
