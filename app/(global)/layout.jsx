import Footer from './_component/footer/footer';
import { Navbar } from './_component/navbar/navbar';

export default function GlobalLayout({ children }) {
  return (
    <div className='relative'>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
