// app/layout.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';
import CustomIcon from './components/icons/CustomIcon';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pearl Kids Academy',
  description: 'Nurturing young minds for a brighter future',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="fixed bottom-4 right-4">
          <CustomIcon />
          </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}