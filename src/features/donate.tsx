import { Layout } from '~/components/layout/layout';
import { Heart, CreditCard, Repeat, Gift, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { useState } from 'react';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText, GlowCard } from '~/components/ui/floating-shapes';

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactLevels = [
  {
    amount: 25,
    impact: 'Provides educational materials for 5 students',
    icon: '📚',
  },
  {
    amount: 50,
    impact: 'Funds a community workshop session',
    icon: '👥',
  },
  {
    amount: 100,
    impact: 'Sponsors cybersecurity training for 10 individuals',
    icon: '🛡️',
  },
  {
    amount: 250,
    impact: 'Supports a family through recovery counseling',
    icon: '💜',
  },
  {
    amount: 500,
    impact: 'Funds a school outreach program',
    icon: '🏫',
  },
  {
    amount: 1000,
    impact: 'Sponsors a full awareness campaign in a community',
    icon: '🌟',
  },
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;
  const currentImpact = impactLevels.find(
    (level) => currentAmount && currentAmount >= level.amount
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 coral-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <Heart className="w-10 h-10 text-secondary-foreground animate-float" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-foreground mb-6 animate-fade-up">
              Make a{' '}
              <GradientText className="from-primary-foreground via-secondary-foreground to-primary-foreground">
                Difference
              </GradientText>{' '}
              Today
            </h1>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed animate-fade-up delay-200">
              Your generous donation helps us reach more communities, save more lives, and build a
              safer world for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Donation Options */}
              <AnimatedSection animation="fade-right" className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  {/* Donation Type Toggle */}
                  <div className="flex gap-4 mb-8">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                        donationType === 'one-time'
                          ? 'hero-gradient text-primary-foreground scale-105 shadow-glow'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      One-Time
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                        donationType === 'monthly'
                          ? 'hero-gradient text-primary-foreground scale-105 shadow-glow'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      <Repeat className="w-5 h-5" />
                      Monthly
                    </button>
                  </div>

                  {/* Amount Selection */}
                  <h3 className="text-lg font-bold text-foreground mb-4">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount && !customAmount
                            ? 'hero-gradient text-primary-foreground shadow-glow'
                            : 'bg-muted text-foreground hover:bg-primary/10'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Or enter a custom amount
                    </label>
                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold group-focus-within:text-primary transition-colors">
                        $
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-4 rounded-xl border border-input bg-background text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Impact Display */}
                  {currentAmount && currentImpact && (
                    <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/10 animate-scale-in">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl animate-float">{currentImpact.icon}</span>
                        <div>
                          <p className="text-foreground font-medium flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Your ${currentAmount} donation:
                          </p>
                          <p className="text-primary font-semibold">{currentImpact.impact}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Donate Button */}
                  <Button
                    size="lg"
                    className="w-full coral-gradient text-secondary-foreground gap-2 text-lg py-6 btn-glow group"
                    disabled={!currentAmount}
                  >
                    <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Donate ${currentAmount || 0} {donationType === 'monthly' && '/month'}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    🔒 Secure payment powered by Stripe
                  </p>
                </div>
              </AnimatedSection>

              {/* Why Donate Sidebar */}
              <AnimatedSection animation="fade-left" className="lg:col-span-2 space-y-6">
                <GlowCard>
                  <div className="bg-muted/50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-primary" />
                      Why Donate?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        '100% of donations fund programs',
                        'Tax-deductible contributions',
                        'Transparent impact reporting',
                        'Recognition on our website',
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-muted-foreground group"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-foreground transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>

                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-foreground mb-4">Other Ways to Help</h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 group hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Repeat className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                      Become a Monthly Donor
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 group hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Gift className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Donate Supplies
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 group hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Volunteer With Us
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Your Impact in Numbers</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$2.5M+', label: 'Raised in 2025' },
              { value: '50,000+', label: 'Lives Impacted' },
              { value: '200+', label: 'Programs Funded' },
              { value: '15+', label: 'Years of Service' },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group">
                  <div className="text-4xl font-serif font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-float">"</div>
            <blockquote className="text-2xl font-serif text-foreground mb-6 leading-relaxed">
              Demworks changed my life. Their cybersecurity program helped me recognize online scams
              that I had no idea about. I'm now sharing this knowledge with my entire community.
            </blockquote>
            <p className="text-muted-foreground">— Chidi Okoro, Program Participant</p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
