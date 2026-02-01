// SERVER COMPONENT
import ContactForm from '../components/ui/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Digital Agency',
  description: 'Get in touch with our team to discuss your next project.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'v.o.r.t.a.x.ott@gmail.com',
    href: 'mailto:v.o.r.t.a.x.ott@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+92 (316) 6237612',
    href: 'tel:+923166237612',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: '123 Tech Street, San Francisco, CA 94105',
    href: '#',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 p-6 glass rounded-2xl hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-gradient transition-all">
                        {item.title}
                      </h3>
                      <p className="text-slate-400">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-12 p-8 glass rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-slate-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}