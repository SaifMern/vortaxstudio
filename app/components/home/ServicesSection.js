// SERVER COMPONENT - Fast initial load
import ServiceCard from './ServiceCard';

const services = [
  {
    iconName: 'Code', // Pass string instead of component
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    iconName: 'Smartphone',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    iconName: 'TrendingUp',
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that build brand awareness and drive meaningful engagement.',
    features: ['Content Strategy', 'Analytics & Reporting', 'Community Management'],
    color: 'from-orange-500 to-red-500',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}