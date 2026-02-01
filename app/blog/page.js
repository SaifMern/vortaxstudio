// SERVER COMPONENT
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2026',
    excerpt: 'Exploring upcoming trends and technologies shaping the web.',
    date: 'January 15, 2026',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Building High-Performance React Applications',
    excerpt: 'Best practices for optimizing React apps for speed and SEO.',
    date: 'January 10, 2026',
    category: 'React',
  },
  {
    id: 3,
    title: 'Social Media Marketing Strategies That Work',
    excerpt: 'Proven tactics to grow your brand on social platforms.',
    date: 'January 5, 2026',
    category: 'Marketing',
  },
];

export const metadata = {
  title: 'Blog - Digital Agency',
  description: 'Read our latest articles on web development, design, and digital marketing.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Insights, tutorials, and industry news
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="p-8 glass rounded-2xl hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                  {post.category}
                </span>
                <span className="text-slate-400 text-sm">{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 hover:text-gradient transition-all">
                {post.title}
              </h2>
              <p className="text-slate-400 mb-4">{post.excerpt}</p>
              <button className="text-primary hover:underline">Read More →</button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}