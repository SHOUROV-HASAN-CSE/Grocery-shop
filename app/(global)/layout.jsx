import FloatingCart from './_component/floatingCart/FloatingCart';
import SetStateFromLocal from './_component/floatingCart/SetStateFromLocal';
import Footer from './_component/footer/footer';
import { Navbar } from './_component/navbar/navbar';

export default function GlobalLayout({ children }) {
  return (
    <div className='relative'>
      <Navbar />
      <main>{children}</main>

      {/* cart sidebar */}
      <FloatingCart />
      {/* set cart and wishlist after refresh */}
      <SetStateFromLocal />

      <Footer />
    </div>
  );
}
