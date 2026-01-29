import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface InitLaunchLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function InitLaunchLogo({
  size = 'md',
  showText = true,
  className = '',
}: InitLaunchLogoProps) {
  const sizes = {
    sm: { icon: 'h-8 w-8', iconSize: 'h-4 w-4', text: 'text-lg' },
    md: { icon: 'h-10 w-10', iconSize: 'h-5 w-5', text: 'text-xl' },
    lg: { icon: 'h-14 w-14', iconSize: 'h-7 w-7', text: 'text-3xl' },
  };

  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <motion.div
        className={`relative flex ${sizes[size].icon} items-center justify-center rounded-lg bg-primary text-primary-foreground overflow-hidden`}
        whileHover={{ scale: 1.05 }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-tr from-primary via-primary to-chart-1"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Rocket icon with launch animation */}
        <motion.div
          className="relative z-10"
          whileHover={{
            y: -2,
            rotate: -15,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Rocket className={sizes[size].iconSize} />
        </motion.div>

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-primary-foreground/30"
          animate={{
            scale: [1, 1.2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {showText && (
        <div className={`${sizes[size].text} font-bold text-foreground font-mono`}>
          <span className="text-primary">init</span>
          <span>Launch</span>
        </div>
      )}
    </div>
  );
}

export function InitLaunchLogoAnimated({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--chart-1)) 50%, hsl(var(--primary)) 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="relative z-10"
          animate={{
            y: [0, -3, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Rocket className="h-6 w-6" />
        </motion.div>
      </motion.div>

      <div className="flex flex-col">
        <span className="text-2xl font-bold font-mono leading-none">
          <motion.span
            className="text-primary"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            init
          </motion.span>
          <span className="text-foreground">Launch</span>
        </span>
        <span className="text-xs text-muted-foreground font-mono">
          init → build → deploy → launch
        </span>
      </div>
    </motion.div>
  );
}
