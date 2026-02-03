import { useState } from 'react';
import { Layout } from '~/components/layout/layout';
import { Shield, Heart, Users, GraduationCap, Building, Megaphone, ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';

import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText, GlowCard } from '~/components/ui/floating-shapes';
import { ImageLightbox } from '~/components/ui/image-lightbox';
import cyberImg from '~/assets/cyber-security.jpg';
import drugImg from '~/assets/drug-awareness.jpg';
import workshopImg from '~/assets/community-workshop.jpg';

// Import drug awareness campaign images
import campaign1 from '~/assets/campaign-1.jpg';
import campaign2 from '~/assets/campaign-2.jpg';
import campaign3 from '~/assets/campaign-3.jpg';
import campaign4 from '~/assets/campaign-4.jpg';
import campaign5 from '~/assets/campaign-5.jpg';
import campaign6 from '~/assets/campaign-6.jpg';
import { Link } from '@tanstack/react-router';

const campaignImages = [
  { src: campaign1, title: 'You Deserve a Clear Mind & a Bright Future' },
  { src: campaign2, title: 'High on Life, Not on Drugs!' },
  { src: campaign3, title: "Be Smart. Don't Start." },
  { src: campaign4, title: 'Addiction is a Prison. Break Free.' },
  { src: campaign5, title: "Your Life is Priceless. Don't Trade it for a Pill." },
  { src: campaign6, title: 'No Dope. Just Hope.' },
];

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
      'To raise awareness about the dangers of drug abuse, empower young people with knowledge, provide support to those affected by addiction, and promote healthier lifestyle choices in Junior/Senior High Schools.',
    features: [
      'Educate students on risks & health impact',
      'Support resources for affected students',
      'Foster open community discussions',
      'Promote healthier coping strategies',
      'Peer-to-peer education initiatives',
    ],
    image: drugImg,
    color: 'coral-gradient',
  },
  {
    icon: GraduationCap,
    title: 'School Outreach Programs',
    description:
      'Age-appropriate educational programs targeting Junior/Senior High School students (ages 12-15), teachers, and school staff for comprehensive community support.',
    features: [
      'Interactive awareness workshops',
      'Student counseling & support',
      'Teacher training programs',
      'Community engagement activities',
      'Distribution of awareness materials',
    ],
    image: workshopImg,
    color: 'navy-gradient',
  },
];

const programComponents = [
  {
    title: 'Awareness Workshops & Seminars',
    topics: [
      'Dangers and long-term effects of drug abuse',
      'Common drugs abused by youth in Ghana',
      'Signs and symptoms of drug abuse',
      'Peer pressure and how to resist it',
      'Healthy coping mechanisms for stress & anxiety',
    ],
    activities: [
      'Open discussions with students',
      'Role-playing activities to resist peer pressure',
      'Q&A with experts on drug abuse prevention',
    ],
  },
  {
    title: 'Student Support & Counseling',
    topics: [
      'Private counseling for struggling students',
      'Identifying students needing rehabilitation',
      'Emotional support sessions',
      'Network of trusted rehab centers',
      'Guidance on navigating support services',
    ],
    activities: [
      'One-on-one counseling sessions',
      'Referrals to rehabilitation centers',
      'Professional help coordination',
    ],
  },
  {
    title: 'Awareness Materials & Souvenirs',
    topics: [
      'T-shirts & wristbands with anti-drug messages',
      'Water bottles & notebooks with awareness content',
      'Leaflets and posters with facts',
      'Information packs on peer pressure',
      'Contact info for support services',
    ],
    activities: [
      'Distribution at school events',
      'Community awareness campaigns',
      'Take-home resource packs',
    ],
  },
  {
    title: 'Community Engagement',
    topics: [
      'Peer-to-peer education training',
      'Student awareness ambassadors',
      'Neighborhood outreach events',
      'Community leader involvement',
      'Health professional partnerships',
    ],
    activities: [
      'Train selected students as peer educators',
      'Host awareness events in schools',
      'Invite motivational speakers',
    ],
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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

      {/* Program Components Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
              Program Details
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Our Drug Awareness Program
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Comprehensive program components designed to educate, support, and empower
              Junior/Senior High School students (ages 12-15), teachers, and school staff in the
              fight against drug abuse.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {programComponents.map((component, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlowCard>
                  <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl coral-gradient flex items-center justify-center mb-6">
                      <span className="text-secondary-foreground font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{component.title}</h3>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3">Key Topics:</h4>
                      <ul className="space-y-2">
                        {component.topics.map((topic, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3">Activities:</h4>
                      <ul className="space-y-2">
                        {component.activities.map((activity, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
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

      {/* Campaign Gallery */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
              #SayNoToDrugAbuse
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Campaign Gallery
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our drug awareness campaign materials — click to view fullscreen
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignImages.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="scale">
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-accent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-primary-foreground font-bold text-lg">{item.title}</p>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
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

      {/* Image Lightbox */}
      <ImageLightbox
        images={campaignImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Layout>
  );
};

export default Services;
