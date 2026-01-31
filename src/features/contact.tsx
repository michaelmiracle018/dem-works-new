import { Layout } from '~/components/layout/layout';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText, GlowCard } from '~/components/ui/floating-shapes';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Community Lane', 'Safety City, SC 12345'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (234) 567-890', '+1 (234) 567-891'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info~demworks.org', 'support~demworks.org'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 2PM'],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              <GradientText className="from-secondary via-primary-foreground to-secondary">
                Contact
              </GradientText>{' '}
              Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-up delay-200">
              Have questions? Want to partner with us? We'd love to hear from you. Reach out and
              we'll respond as soon as we can.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlowCard>
                  <div className="bg-card rounded-xl p-6 shadow-elevated text-center hover:shadow-glow transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-xl hero-gradient mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <info.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fade-right">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-muted-foreground text-sm">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john~example.com"
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full hero-gradient text-primary-foreground gap-2 btn-glow group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message{' '}
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map / Additional Info */}
            <AnimatedSection animation="fade-left" className="space-y-8">
              <div className="bg-muted/50 rounded-2xl p-8 h-80 flex items-center justify-center group hover:bg-muted transition-colors duration-300">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Community Lane
                    <br />
                    Safety City, SC 12345
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Schedule a Workshop', desc: 'Book our team for your organization' },
                    { label: 'Become a Volunteer', desc: 'Join our mission to help communities' },
                    { label: 'Request Resources', desc: 'Get educational materials for free' },
                    { label: 'Report an Issue', desc: 'Let us know how we can improve' },
                  ].map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all duration-300 cursor-pointer group card-hover"
                    >
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.desc}</p>
                      </div>
                      <Send className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
