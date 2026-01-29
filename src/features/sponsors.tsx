import { Layout } from '~/components/layout/layout';
import { Building, Heart, Handshake, ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Link } from '@tanstack/react-router';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText, GlowCard } from '~/components/ui/floating-shapes';

const sponsors = [
  {
    name: 'TechCorp Foundation',
    tier: 'Platinum',
    description: 'Supporting our cybersecurity education programs since 2018.',
    logo: 'TC',
  },
  {
    name: 'Health First Initiative',
    tier: 'Platinum',
    description: 'Partnering on drug abuse prevention and recovery support.',
    logo: 'HF',
  },
  {
    name: 'Community Bank Nigeria',
    tier: 'Gold',
    description: 'Funding community workshops across 15 states.',
    logo: 'CB',
  },
  {
    name: 'Global Education Fund',
    tier: 'Gold',
    description: 'Empowering our school outreach programs.',
    logo: 'GE',
  },
  {
    name: 'SafeNet Technologies',
    tier: 'Silver',
    description: 'Providing technology resources for digital safety training.',
    logo: 'SN',
  },
  {
    name: 'Wellness Partners Africa',
    tier: 'Silver',
    description: 'Supporting mental health and recovery initiatives.',
    logo: 'WP',
  },
  {
    name: 'Youth Empowerment Coalition',
    tier: 'Bronze',
    description: 'Collaborating on youth-focused programs.',
    logo: 'YE',
  },
  {
    name: 'Digital Future Initiative',
    tier: 'Bronze',
    description: 'Advancing digital literacy in underserved communities.',
    logo: 'DF',
  },
];

const partnershipBenefits = [
  {
    icon: Building,
    title: 'Brand Visibility',
    description: 'Your logo on all materials, events, and our website reaching thousands monthly.',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Direct involvement in programs that transform lives and build safer communities.',
  },
  {
    icon: Handshake,
    title: 'Networking',
    description: 'Connect with other organizations, government agencies, and community leaders.',
  },
];

const tierColors: Record<string, string> = {
  Platinum: 'hero-gradient',
  Gold: 'coral-gradient',
  Silver: 'bg-muted',
  Bronze: 'bg-muted/50',
};

const tierTextColors: Record<string, string> = {
  Platinum: 'text-primary-foreground',
  Gold: 'text-secondary-foreground',
  Silver: 'text-foreground',
  Bronze: 'text-foreground',
};

const Sponsors = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              Our Partners
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Sponsors &{' '}
              <GradientText className="from-secondary via-primary-foreground to-secondary">
                Partners
              </GradientText>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-up delay-200">
              We're grateful for the organizations that make our mission possible. Together, we're
              building safer, more informed communities.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Thank You
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Our Valued Sponsors
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <AnimatedSection key={index} delay={index * 75}>
                <GlowCard>
                  <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 flex flex-col group">
                    <div
                      className={`w-16 h-16 rounded-xl ${tierColors[sponsor.tier]} flex items-center justify-center mb-4 ${tierTextColors[sponsor.tier]} group-hover:scale-110 transition-transform`}
                    >
                      <span className="text-xl font-bold">{sponsor.logo}</span>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3 ${
                        sponsor.tier === 'Platinum'
                          ? 'bg-primary/10 text-primary'
                          : sponsor.tier === 'Gold'
                            ? 'bg-secondary/10 text-secondary'
                            : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {sponsor.tier} Partner
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {sponsor.name}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">{sponsor.description}</p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Why Partner With Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Partnership Benefits
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {partnershipBenefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-16 h-16 rounded-2xl hero-gradient mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Tiers */}
          <div className="grid md:grid-cols-4 gap-6">
            {['Platinum', 'Gold', 'Silver', 'Bronze'].map((tier, index) => (
              <AnimatedSection key={tier} delay={index * 100 + 300}>
                <div
                  className={`rounded-xl p-6 text-center transition-all duration-500 hover:scale-105 ${
                    tier === 'Platinum'
                      ? 'hero-gradient text-primary-foreground'
                      : tier === 'Gold'
                        ? 'coral-gradient text-secondary-foreground'
                        : 'bg-card shadow-soft text-foreground'
                  }`}
                >
                  <h4 className="text-xl font-bold mb-2">{tier}</h4>
                  <p
                    className={`text-sm ${tier === 'Platinum' || tier === 'Gold' ? 'opacity-80' : 'text-muted-foreground'}`}
                  >
                    {tier === 'Platinum' && '$50,000+ annually'}
                    {tier === 'Gold' && '$25,000+ annually'}
                    {tier === 'Silver' && '$10,000+ annually'}
                    {tier === 'Bronze' && '$5,000+ annually'}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Become a Partner
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our network of sponsors and make a lasting impact on communities across the
              nation. Every partnership helps us reach more people with life-saving awareness
              programs.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="coral-gradient text-secondary-foreground gap-2 btn-glow group"
              >
                Contact Us to Partner{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
