import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Digital Agency - Transform Your Digital Presence',
  description: 'Full-service digital agency specializing in web development, app development, and social media marketing.',
};

// This is a SERVER COMPONENT - Fast initial load
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}