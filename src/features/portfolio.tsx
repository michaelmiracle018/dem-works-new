import { useState } from 'react';

import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';
import { Layout } from '~/components/layout/layout';
import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { portfolioProjects, categories } from '~/data/portfolio';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from '~/components/animations/scroll-reveal';
import { GridBackground, GlowingOrb } from '~/components/animations/floating-elements';
import { Link } from '@tanstack/react-router';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GridBackground />
        <GlowingOrb className="w-96 h-96 -top-48 -right-48" />

        <div className="container relative z-10 app-container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-mono text-primary mb-6">
                <Terminal className="h-4 w-4" />
                <span className="text-muted-foreground">$</span> git log --portfolio
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Our <span className="text-primary">{'<Portfolio/>'}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground md:text-xl font-mono">
                <span className="text-primary">//</span> A showcase of our best work. Each project
                tells a story.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-y border-border py-6 bg-card/30">
        <div className="container app-container">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4">
              <div className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">filter</span>.by(category)
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((category) => (
                  <motion.div
                    key={category.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={activeCategory === category.value ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveCategory(category.value)}
                      className="font-mono"
                    >
                      {activeCategory === category.value && '// '}
                      {category.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <StaggerContainer
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.1}
            key={activeCategory}
          >
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Link to="." className="group block">
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all">
                      <div className="relative aspect-4/3 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="font-mono text-sm text-primary flex items-center gap-2">
                            View Case Study <ExternalLink className="h-4 w-4" />
                          </span>
                        </motion.div>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2 font-mono text-xs text-primary/80">
                          {'<'}
                          {project.categoryLabel.toLowerCase().replace(' ', '-')}
                          {' />'}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-mono text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground font-mono">
                <span className="text-primary">//</span> No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/10 py-16 md:py-24 border-t border-border">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-sm text-primary mb-4">{'// Want to be featured?'}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Want to See Your Project Here?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground font-mono">
                Let's create something amazing together.
              </p>
              <Button asChild size="lg" className="font-mono">
                <Link to="/contact">
                  <span className="text-primary-foreground">$</span> start-project
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
