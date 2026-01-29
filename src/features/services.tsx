import { Layout } from '~/components/layout/layout';
import { Shield, Heart, Users, GraduationCap, Building, Megaphone, ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Link } from '@tanstack/react-router';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText, GlowCard } from '~/components/ui/floating-shapes';
import cyberImg from '~/assets/cyber-security.jpg';
import drugImg from '~/assets/drug-awareness.jpg';
import workshopImg from '~/assets/community-workshop.jpg';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity Awareness Training',
    description:
      'Comprehensive programs teaching individuals and organizations how to protect themselves from online threats, phishing attacks, identity theft, and data breaches.',
    features: [
      'Personal digital safety workshops',
      'Corporate cybersecurity training',
      'Safe social media practices',
      'Password management & 2FA education',
      'Recognizing scams and phishing',
    ],
    image: cyberImg,
    color: 'hero-gradient',
  },
  {
    icon: Heart,
    title: 'Drug Abuse Prevention Programs',
    description:
      'Evidence-based prevention programs that educate communities about the dangers of substance abuse and provide pathways to support and recovery.',
    features: [
      'Youth substance abuse prevention',
      'Family support programs',
      'Peer education initiatives',
      'Recovery support services',
      'Community awareness campaigns',
    ],
    image: drugImg,
    color: 'coral-gradient',
  },
  {
    icon: GraduationCap,
    title: 'School Outreach Programs',
    description:
      'Age-appropriate educational programs for students from primary to university level, fostering awareness from an early age.',
    features: [
      'Primary school safety education',
      'Secondary school workshops',
      'University awareness campaigns',
      'Teacher training programs',
      'Parent engagement sessions',
    ],
    image: workshopImg,
    color: 'navy-gradient',
  },
];

const additionalServices = [
  {
    icon: Users,
    title: 'Community Workshops',
    description:
      'Interactive sessions bringing communities together to learn, share, and support each other.',
  },
  {
    icon: Building,
    title: 'Corporate Training',
    description: 'Tailored programs for businesses to protect their employees and organizations.',
  },
  {
    icon: Megaphone,
    title: 'Awareness Campaigns',
    description:
      'Large-scale public awareness initiatives using media, events, and community engagement.',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Programs That{' '}
              <GradientText className="from-secondary via-primary-foreground to-secondary">
                Transform
              </GradientText>{' '}
              Lives
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-up delay-200">
              Comprehensive awareness and education programs designed to protect, empower, and
              support communities across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <AnimatedSection
                  animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} mb-6 hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground group">
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-primary transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="hero-gradient text-primary-foreground gap-2 btn-glow group">
                      Learn More{' '}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </AnimatedSection>
                <AnimatedSection
                  animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-elevated w-full group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div
                      className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-32 h-32 ${service.color} rounded-2xl -z-10 opacity-30 animate-pulse-slow`}
                    />
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              More Ways We Help
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Additional Services
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlowCard>
                  <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
                    <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 coral-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-6">
              Need a Customized Program?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              We work with organizations to create tailored programs that meet their specific needs.
              Contact us to discuss how we can help your community.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 btn-glow group"
              >
                Get in Touch{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
