import { Layout } from '~/components/layout/layout';
import { Users, Target, Eye, Heart, Award, Globe, Linkedin, Twitter } from 'lucide-react';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText } from '~/components/ui/floating-shapes';
import workshopImg from '~/assets/community-workshop.jpg';
import team1 from '~/assets/team/Dora-Wepia.jpeg';
import team2 from '~/assets/team/Desmond.jpeg';
import team3 from '~/assets/team/Patience-Mercy-Achambeh.jpeg';
import team4 from '~/assets/team/dorithy-morisum-salifu.jpeg';
import team5 from '~/assets/team/Wekuri-Solonic.jpeg';
import team6 from '~/assets/team/Seth.jpeg';
import team7 from '~/assets/team/Mardiyah-Bint-Umar.jpeg';

const team = [
  {
    name: 'Dora Wepia',
    role: 'Founder & Executive Director ',
    bio: '20+ years in public health and community development.',
    image: team1,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Desmond',
    role: 'Social Media Manager',
    bio: 'Expert in cybersecurity education and youth programs.',
    image: team2,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Patience Mercy Achambeh',
    role: 'Communications, Fundraising & Secretary',
    bio: 'Passionate about connecting with communities and building partnerships.',
    image: team3,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dorithy Morisum Salifu',
    role: 'Administrative & Operations Lead',
    bio: 'PhD in Social Sciences with focus on addiction studies.',
    image: team4,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Wekuri Solonic',
    role: 'Community Mobilization & Events Lead ',
    bio: 'PhD in Social Sciences with focus on addiction studies.',
    image: team5,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Seth',
    role: 'Video Editor & Content Producer',
    bio: 'PhD in Social Sciences with focus on addiction studies.',
    image: team6,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Mardiyah Bint Umar',
    role: 'Youth Engagement & Field Programs Coordinator',
    bio: 'PhD in Social Sciences with focus on addiction studies.',
    image: team7,
    linkedin: '#',
    twitter: '#',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every individual and community with empathy and understanding.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in all our programs and services.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in the power of collective action and shared responsibility.',
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'We measure our success by the positive change we create in peoples lives.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              About Demworks
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Our Story &{' '}
              <GradientText className="from-secondary via-primary-foreground to-secondary">
                Mission
              </GradientText>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-up delay-200">
              DemWorks (Development, Empowerment, and Mobilization Works) is a bold and dynamic
              initiative designed to catalyze grassroots-driven change across Africa, starting with
              Ghana. At its core, DemWorks exists to empower individuals and communities through
              targeted development programs, inclusive empowerment strategies, and innovative
              mobilization efforts. We believe that when people are given the tools, resources, and
              opportunities to thrive, they become unstoppable forces for progress.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <img
                  src={workshopImg}
                  alt="Community workshop"
                  className="rounded-2xl shadow-elevated w-full group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 hero-gradient rounded-2xl -z-10 opacity-30 animate-pulse-slow" />
              </div>
            </AnimatedSection>

            <div className="space-y-10">
              <AnimatedSection animation="fade-left" delay={100}>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To drive inclusive development, empower underrepresented groups, and mobilize
                      communities toward sustainable progress through education, collaboration, and
                      innovation.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={200}>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-xl coral-gradient flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                    <Eye className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To drive inclusive development, empower underrepresented groups, and mobilize
                      communities toward sustainable progress through education, collaboration, and
                      innovation.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              What Drives Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">Our Core Values</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 card-hover group">
                  <div className="w-16 h-16 rounded-2xl hero-gradient mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              The People Behind Demworks
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Our Leadership Team
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="scale">
                <div className="text-center group">
                  <div className="relative w-60 h-60 rounded-full mx-auto mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 navy-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mt-3">
              15 Years of Impact
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: '2011',
                title: 'Foundation',
                desc: 'Demworks was founded with a mission to combat drug abuse in local communities.',
              },
              {
                year: '2015',
                title: 'Expansion',
                desc: 'Extended our programs to include cybersecurity awareness as digital threats grew.',
              },
              {
                year: '2019',
                title: 'National Reach',
                desc: 'Expanded operations to 20+ cities and partnered with government agencies.',
              },
              {
                year: '2024',
                title: 'Digital Transformation',
                desc: 'Launched online learning platforms reaching thousands more individuals.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 150} animation="fade-left">
                <div className="flex gap-6 items-start group">
                  <div className="text-4xl font-serif font-bold text-primary group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-xl font-bold text-primary-foreground mb-2">{item.title}</h4>
                    <p className="text-primary-foreground/70">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
