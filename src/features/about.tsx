import { Layout } from '~/components/layout/layout';
import { Users, Target, Eye, Heart, Award, Globe, Linkedin, Twitter } from 'lucide-react';

import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GlowCard, GradientText } from '~/components/ui/floating-shapes';
import campaign1 from '~/assets/campaign-1.jpg';
import demworksLogoFull from '~/assets/demworks-logo-full.png';
import team1 from '~/assets/team/Dora-Wepia.jpeg';
import team2 from '~/assets/team/Desmond.jpeg';
import team3 from '~/assets/team/Patience-Mercy-Achambeh.jpeg';
import team4 from '~/assets/team/Dorithy-Morisum-Salifu.jpeg';
import team5 from '~/assets/team/Wekuri-Solonic.jpeg';
import team6 from '~/assets/team/Seth.jpeg';
import team7 from '~/assets/team/Mardiyah-Bint-Umar.jpeg';

const team = [
  {
    name: 'Dora Wepia',
    role: 'Founder & Executive Director ',
    // bio: '20+ years in public health and community development.',
    image: team1,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Desmond Basigiyem',
    role: 'Social Media Manager',
    // bio: 'Expert in cybersecurity education and youth programs.',
    image: team2,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Patience Mercy Achambeh',
    role: 'Communications, Fundraising & Secretary',
    // bio: 'Passionate about connecting with communities and building partnerships.',
    image: team3,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dorithy Morisum Salifu',
    role: 'Administrative & Operations Lead',
    // bio: 'PhD in Social Sciences with focus on addiction studies.',
    image: team4,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Wekuri Solonic',
    role: 'Community Mobilization & Events Lead ',
    // bio: 'PhD in Social Sciences with focus on addiction studies.',
    image: team5,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Seth Mensah Konadu',
    role: 'Video Editor & Content Producer',
    // bio: 'PhD in Social Sciences with focus on addiction studies.',
    image: team6,
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Mardiyah Bint Umar',
    role: 'Youth Engagement & Field Programs Coordinator',
    // bio: 'PhD in Social Sciences with focus on addiction studies.',
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

const strategicObjectives = [
  'Promote community-driven development through skills training, entrepreneurship support, and local innovation.',
  'Empower youth and women to lead change through mentorship, leadership development, and advocacy training.',
  'Mobilize communities around issues of education, gender equity, and economic inclusion.',
  'Launch impactful community programs starting with a nationwide drug abuse awareness and prevention campaign.',
  'Foster strategic partnerships with government, civil society, and the private sector to amplify impact.',
  'Enhance access to knowledge through awareness campaigns, digital platforms, and storytelling.',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              About DemWorks
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Development,{' '}
              <GradientText className="from-secondary via-primary-foreground to-secondary">
                Empowerment
              </GradientText>{' '}
              & Mobilization Works
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-up delay-200 max-w-3xl mx-auto">
              A bold and dynamic initiative designed to catalyze grassroots-driven change across
              Africa, starting with Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <img
                  src={campaign1}
                  alt="Development, Empowerment and Mobilization Works"
                  className="rounded-2xl shadow-elevated w-full group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 hero-gradient rounded-2xl -z-10 opacity-30 animate-pulse-slow" />
                <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-xl shadow-lg">
                  <img src={demworksLogoFull} alt="Demworks" className="h-12 w-auto" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Executive Summary
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
                Catalyzing <GradientText>Grassroots Change</GradientText>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At its core, DemWorks exists to empower individuals and communities through targeted
                development programs, inclusive empowerment strategies, and innovative mobilization
                efforts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe that when people are given the tools, resources, and opportunities to
                thrive, they become unstoppable forces for progress. Our approach integrates
                capacity building, strategic partnerships, and people-centered programming to
                address inequalities and inspire leadership at every level.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through a focus on <strong className="text-foreground">young people</strong>,{' '}
                <strong className="text-foreground">women</strong>, and{' '}
                <strong className="text-foreground">underserved communities</strong>, DemWorks
                serves as a launchpad for sustainable growth, social change, and civic
                transformation.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Purpose
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Mission & Vision
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <GlowCard>
                <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
                  <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To drive inclusive development, empower underrepresented groups, and mobilize
                    communities toward sustainable progress through education, collaboration, and
                    innovation.
                  </p>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <GlowCard>
                <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
                  <div className="w-16 h-16 rounded-2xl coral-gradient flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A continent where every individual — regardless of background — is empowered,
                    mobilized, and equipped to shape their future and contribute meaningfully to
                    national development.
                  </p>
                </div>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Background & Rationale */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                Why We Exist
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
                Background & Rationale
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-muted/50 rounded-2xl p-8 md:p-12 shadow-soft">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Many communities across Ghana and the wider region remain underserved in terms of
                  education, opportunity, and access to resources. DemWorks was born from the need
                  to move beyond traditional aid models and embrace{' '}
                  <strong className="text-foreground">empowerment-led development</strong> — where
                  transformation is led by those who live it.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  By providing platforms for leadership, equipping individuals with life-changing
                  skills, and uniting people under common causes, DemWorks fills a critical gap in
                  the development ecosystem. Our focus on{' '}
                  <strong className="text-foreground">development</strong>,{' '}
                  <strong className="text-foreground">empowerment</strong>, and{' '}
                  <strong className="text-foreground">mobilization</strong> creates a ripple effect
                  of change from the grassroots up.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm">
              Our Goals
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mt-3">
              Strategic Objectives
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {strategicObjectives.map((objective, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <span className="text-secondary-foreground font-bold">{index + 1}</span>
                  </div>
                  <p className="text-primary-foreground/90 leading-relaxed">{objective}</p>
                </div>
              </AnimatedSection>
            ))}
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
              The People Behind DemWorks
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3">
              Our Leadership Team
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="scale">
                <div className="text-center group">
                  <div className="relative w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
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
                  {/* <p className="text-muted-foreground text-sm mb-4">{member.bio}</p> */}
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
    </Layout>
  );
};

export default About;
