import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Serene Haven Homestay | Luxury Boutique Resort',
  description: 'Experience unparalleled comfort in the heart of nature. Book your luxury homestay experience today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#09090b] text-[#fafafa] selection:bg-white/10 min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
