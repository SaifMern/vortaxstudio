// SERVER COMPONENT
export const metadata = {
  title: 'Our Work - Digital Agency',
  description: 'Explore our portfolio of successful projects and case studies.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Portfolio of successful projects across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-8 glass rounded-2xl">
              <div className="h-48 bg-linear-to-br from-primary to-accent rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Project {i}</h3>
              <p className="text-slate-400">Case study coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}