// SERVER COMPONENT - SEO optimized
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import PortfolioGrid from './components/home/PortfolioGrid';

export const metadata = {
  title: 'Digital Agency - Transform Your Digital Presence',
  description: 'Full-service digital agency specializing in web development, app development, and social media marketing. Build your future with us.',
  openGraph: {
    title: 'Digital Agency - Transform Your Digital Presence',
    description: 'Full-service digital agency specializing in web development, app development, and social media marketing.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero with 3D Background - Client Component with animations */}
      <HeroSection />

      {/* Services - Server wrapper with Client cards */}
      <ServicesSection />

      {/* Portfolio - Client Component for animations */}
      <PortfolioGrid />
    </main>
  );
}