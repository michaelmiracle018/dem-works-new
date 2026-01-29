import { useEffect, useState, useRef } from 'react';
import {
  ArrowRight,
  Shield,
  Heart,
  Users,
  BookOpen,
  Calendar,
  ChevronRight,
  Play,
  Sparkles,
  Zap,
  Globe,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Layout } from '~/components/layout/layout';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GlowCard, GradientText } from '~/components/ui/floating-shapes';
import heroBg from '~/assets/hero-bg.jpg';
import workshopImg from '~/assets/community-workshop.jpg';
import cyberImg from '~/assets/cyber-security.jpg';
import drugImg from '~/assets/drug-awareness.jpg';
import { Link } from '@tanstack/react-router';

function AnimatedCounter({
  end,
  suffix = '',
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="font-serif text-5xl lg:text-6xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

const stats = [
  { value: 50000, suffix: '+', label: 'Lives Impacted', icon: Users },
  { value: 200, suffix: '+', label: 'Workshops Conducted', icon: BookOpen },
  { value: 15, suffix: '', label: 'Years of Service', icon: Calendar },
  { value: 45, suffix: '+', label: 'Partner Organizations', icon: Globe },
];

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity Awareness',
    description:
      'Protecting communities from online threats through education and training programs.',
    image: cyberImg,
  },
  {
    icon: Heart,
    title: 'Drug Abuse Prevention',
    description: 'Empowering individuals with knowledge and support to make healthy choices.',
    image: drugImg,
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description:
      'Building stronger communities through engagement, workshops, and support networks.',
    image: workshopImg,
  },
];

const blogPosts = [
  {
    title: 'Understanding Digital Safety for Teens',
    excerpt:
      'Essential tips for parents and educators to help young people navigate the digital world safely.',
    date: 'Jan 25, 2026',
    category: 'Cybersecurity',
  },
  {
    title: 'Breaking the Stigma: Conversations About Addiction',
    excerpt: 'How open dialogue can transform our approach to substance abuse recovery.',
    date: 'Jan 20, 2026',
    category: 'Drug Awareness',
  },
  {
    title: 'Community Workshop Success in Lagos',
    excerpt: 'Over 500 participants joined our latest cybersecurity awareness program.',
    date: 'Jan 15, 2026',
    category: 'Events',
  },
];

const upcomingEvents = [
  {
    title: 'Digital Safety Summit 2026',
    date: 'Feb 15, 2026',
    location: 'Lagos Convention Center',
  },
  {
    title: 'Youth Empowerment Workshop',
    date: 'Feb 28, 2026',
    location: 'Abuja Community Hall',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Community awareness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />
        </div>

        {/* Floating shapes */}
        <FloatingShapes variant="hero" />

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in border border-white/10">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Making Communities Safer Since 2011
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              <span className="block animate-fade-up">Empowering Lives Through</span>
              <span className="block animate-fade-up delay-200">
                <GradientText>Awareness</GradientText> &{' '}
                <span className="text-secondary">Education</span>
              </span>
            </h1>

            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-up delay-300">
              Demworks is dedicated to protecting communities from drug abuse and cyber threats
              through comprehensive awareness programs, education, and support services.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <Link to="/services">
                <Button
                  size="lg"
                  className="hero-gradient text-primary-foreground gap-2 hover:opacity-90 shadow-glow btn-glow group"
                >
                  Our Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 gap-2 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  Read Our Story
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-8 animate-fade-in delay-600">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-sm">Rapid Response Team</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm">Certified Programs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center group">
                <div className="w-16 h-16 rounded-2xl hero-gradient mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={workshopImg}
                    alt="Community workshop"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 hero-gradient rounded-2xl -z-10 opacity-20 animate-pulse-slow" />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-float">
                  15+ Years
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                About Demworks
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Building a <GradientText>Safer Future</GradientText> Together
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For over 15 years, Demworks has been at the forefront of community education,
                helping individuals and organizations understand and combat the threats of drug
                abuse and cybersecurity vulnerabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is simple: empower every person with the knowledge and resources they
                need to protect themselves and their loved ones in both the physical and digital
                world.
              </p>
              <Link to="/about">
                <Button className="hero-gradient text-primary-foreground gap-2 btn-glow group">
                  Learn More About Us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive programs designed to educate, protect, and empower communities across
              the nation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <GlowCard>
                  <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Link
                        to="/services"
                        className="text-primary font-semibold inline-flex items-center gap-2 link-underline"
                      >
                        Learn More{' '}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Events Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                      Latest News
                    </span>
                    <h2 className="text-3xl font-bold text-foreground mt-2">From Our Blog</h2>
                  </div>
                  <Link to="/blog">
                    <Button variant="outline" className="gap-2 group">
                      View All{' '}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <article className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 flex gap-6 card-hover">
                      <div className="hidden sm:flex w-16 h-16 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <BookOpen className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <AnimatedSection>
                <div className="mb-8">
                  <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                    Mark Your Calendar
                  </span>
                  <h2 className="text-3xl font-bold text-foreground mt-2">Upcoming Events</h2>
                </div>
              </AnimatedSection>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <AnimatedSection key={index} delay={index * 100 + 200}>
                    <div className="bg-card rounded-xl p-5 shadow-soft border-l-4 border-secondary hover:shadow-elevated transition-all duration-300 group card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl coral-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Calendar className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {event.title}
                          </h4>
                          <p className="text-sm text-primary font-medium">{event.date}</p>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={400}>
                <Link to="/events" className="mt-6 block">
                  <Button variant="outline" className="w-full gap-2 group">
                    View All Events{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Your support helps us reach more communities, conduct more workshops, and save more
              lives. Together, we can build a safer world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="coral-gradient text-secondary-foreground gap-2 hover:opacity-90 shadow-lg btn-glow group"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
