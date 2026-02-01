// SERVER COMPONENT
export const metadata = {
  title: 'Our Services - Digital Agency',
  description: 'Explore our comprehensive digital services including web development, app development, and social media marketing.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Web Development',
              description: 'Custom websites built with modern technologies for optimal performance.',
            },
            {
              title: 'App Development',
              description: 'Native and cross-platform mobile applications that engage users.',
            },
            {
              title: 'Digital Marketing',
              description: 'Strategic campaigns that build brand awareness and drive growth.',
            },
          ].map((service, i) => (
            <div key={i} className="p-8 glass rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}