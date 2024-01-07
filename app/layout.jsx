import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from './ReduxProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Brand Name',
  description: "World's best Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <body
          className={`${inter.className} min-h-screen bg-background text-black`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ReduxProvider>
  );
}
