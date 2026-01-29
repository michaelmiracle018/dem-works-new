import { Layout } from '~/components/layout/layout';
import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Link } from '@tanstack/react-router';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText, GlowCard } from '~/components/ui/floating-shapes';

const upcomingEvents = [
  {
    id: 1,
    title: 'Digital Safety Summit 2026',
    description:
      'Join industry experts, educators, and community leaders for a full-day summit on protecting our digital lives. Featuring keynotes, workshops, and networking opportunities.',
    date: 'February 15, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Lagos Convention Center',
    attendees: 500,
    type: 'Conference',
    featured: true,
  },
  {
    id: 2,
    title: 'Youth Empowerment Workshop',
    description:
      'Interactive workshop for young people aged 15-25 on building resilience against peer pressure and making healthy life choices.',
    date: 'February 28, 2026',
    time: '2:00 PM - 6:00 PM',
    location: 'Abuja Community Hall',
    attendees: 100,
    type: 'Workshop',
    featured: true,
  },
  {
    id: 3,
    title: "Parent's Guide to Online Safety",
    description:
      "Essential webinar for parents on monitoring and guiding children's online activities safely.",
    date: 'March 5, 2026',
    time: '7:00 PM - 9:00 PM',
    location: 'Online (Zoom)',
    attendees: 200,
    type: 'Webinar',
    featured: false,
  },
  {
    id: 4,
    title: 'Corporate Cybersecurity Training',
    description:
      'Hands-on training for businesses on protecting organizational data and preventing breaches.',
    date: 'March 12, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Port Harcourt Business Center',
    attendees: 50,
    type: 'Training',
    featured: false,
  },
  {
    id: 5,
    title: 'Community Awareness Walk',
    description:
      'Join us for a solidarity walk to raise awareness about drug abuse prevention in our communities.',
    date: 'March 20, 2026',
    time: '8:00 AM - 12:00 PM',
    location: 'Starting at Freedom Park, Lagos',
    attendees: 1000,
    type: 'Community Event',
    featured: false,
  },
];

const pastEvents = [
  {
    title: 'Cyber Awareness Week 2025',
    date: 'November 2025',
    attendees: 2500,
    location: 'Multiple Cities',
  },
  {
    title: 'Recovery & Hope Conference',
    date: 'October 2025',
    attendees: 800,
    location: 'Kano',
  },
  {
    title: 'School Safety Program Launch',
    date: 'September 2025',
    attendees: 50,
    location: '50 Schools Nationwide',
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              Events
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Join Us at Our{' '}
              <GradientText className="from-secondary via-primary-foreground to-secondary">
                Events
              </GradientText>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-up delay-200">
              From workshops and conferences to community walks, find opportunities to learn,
              connect, and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
              Mark Your Calendar
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">Featured Events</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {upcomingEvents
              .filter((e) => e.featured)
              .map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 100}>
                  <GlowCard>
                    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
                      <div className="h-48 coral-gradient flex items-center justify-center relative overflow-hidden">
                        <Calendar className="w-20 h-20 text-secondary-foreground/30 group-hover:scale-110 transition-transform duration-500" />
                        <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {event.type}
                        </span>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">{event.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm group/item">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="text-foreground font-medium group-hover/item:text-primary transition-colors">
                              {event.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="text-muted-foreground">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="text-muted-foreground">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-muted-foreground">
                              {event.attendees} Expected Attendees
                            </span>
                          </div>
                        </div>

                        <Button className="w-full coral-gradient text-secondary-foreground gap-2 btn-glow group/btn">
                          Register Now{' '}
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </GlowCard>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-20 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground mb-8">All Upcoming Events</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 75}>
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6 group card-hover">
                  <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Calendar className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="flex-shrink-0 gap-2 group/btn hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Learn More{' '}
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground mb-8">Past Events</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-muted/50 rounded-xl p-6 hover:bg-muted transition-colors duration-300 group">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {event.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Users className="w-4 h-4" /> {event.attendees} Attendees
                    </p>
                  </div>
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
              Want to Host an Event With Us?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              We partner with organizations, schools, and communities to bring awareness programs to
              your area. Let's collaborate!
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="coral-gradient text-secondary-foreground gap-2 btn-glow group"
              >
                Partner With Us{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
