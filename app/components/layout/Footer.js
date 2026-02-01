// SERVER COMPONENT - Static content
import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import NewsletterForm from '../ui/NewsletterForm';

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Career', href: '/career' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  Services: [
    { name: 'Web Development', href: '/services#web' },
    { name: 'App Development', href: '/services#app' },
    { name: 'Digital Marketing', href: '/services#marketing' },
    { name: 'Consulting', href: '/services#consulting' },
  ],
  Resources: [
    { name: 'Documentation', href: '/#docs' },
    { name: 'Help Center', href: '/#help' },
    { name: 'Privacy Policy', href: '/#privacy' },
    { name: 'Terms of Service', href: '/#terms' },
  ],
};

const socialLinks = [
  //{ icon: Github, href: 'https://github.com', label: 'GitHub' },
  //{ icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/saif-ur-rehman-b95b45376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/vorta_xstudio?igsh=MTgxbDY5c2k3aDRwMg==', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay <span className="text-gradient">Updated</span>
            </h3>
            <p className="text-slate-400 mb-8">
              Subscribe to our newsletter for the latest updates, insights, and exclusive offers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              <span className="text-gradient">Vortax</span>
              <span className="text-white">Studio</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Transforming ideas into exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/#privacy" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#terms" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/#cookies" className="text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}