import { cn } from '~/lib/utils';

interface FloatingShapesProps {
  className?: string;
  variant?: 'hero' | 'section' | 'minimal';
}

export function FloatingShapes({ className, variant = 'hero' }: FloatingShapesProps) {
  if (variant === 'hero') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        {/* Large gradient orb */}
        <div className="absolute -top-1/4 -right-1/4 w-150 h-150 rounded-full bg-linear-to-br from-primary/20 to-secondary/10 blur-3xl animate-float-slow" />

        {/* Smaller accent orb */}
        <div className="absolute -bottom-1/4 -left-1/4 w-100 h-100 rounded-full bg-linear-to-tr from-secondary/15 to-primary/5 blur-3xl animate-float-delayed" />

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary-foreground/10 rounded-2xl rotate-12 animate-spin-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary-foreground/5 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-primary-foreground/10 rotate-45 animate-float" />

        {/* Dots pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_50%,hsl(var(--primary-foreground)/0.02)_50%,hsl(var(--primary-foreground)/0.02)_100%)] bg-size-[60px_60px]" />
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/5 blur-2xl" />
      </div>
    );
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl animate-float-slow" />
    </div>
  );
}

// Animated gradient text
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_auto] bg-clip-text text-transparent animate-gradient',
        className
      )}
    >
      {children}
    </span>
  );
}

// Glowing card effect
interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div className={cn('relative group', className)}>
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
      <div className="relative bg-card rounded-2xl">{children}</div>
    </div>
  );
}

// Magnetic button effect wrapper
interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticWrapper({ children, className }: MagneticWrapperProps) {
  return (
    <div
      className={cn(
        'group relative inline-block transition-transform duration-200 hover:scale-105',
        className
      )}
    >
      {children}
    </div>
  );
}

// Particle background
export function ParticleBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
