import { Navbar } from './_component/navbar/navbar';

export default function GlobalLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
