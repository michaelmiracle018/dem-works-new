import { useState } from 'react';

import { Layout } from '~/components/layout/layout';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { blogPosts, categories } from '~/lib/blog-data';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes, GradientText, GlowCard } from '~/components/ui/floating-shapes';
import { Link } from '@tanstack/react-router';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              Our Blog
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              News,{' '}
              <GradientText className="from-secondary via-primary-foreground to-secondary">
                Insights
              </GradientText>{' '}
              & Resources
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-up delay-200">
              Stay informed with the latest updates on cybersecurity, drug awareness, and community
              initiatives from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${selectedCategory === category ? 'hero-gradient text-primary-foreground scale-105' : 'hover:scale-105'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-background relative overflow-hidden">
          <FloatingShapes variant="minimal" />
          <div className="container mx-auto px-4 relative">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <GlowCard>
                    <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
                      <div className="h-56 relative overflow-hidden">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full hero-gradient flex items-center justify-center">
                            <Tag className="w-16 h-16 text-primary-foreground/30 group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        </div>
                        <Link to="/blog/$postId" params={{ postId: post.slug }}>
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <User className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{post.author}</p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {post.date}
                              </p>
                            </div>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-primary gap-1 group/btn"
                          >
                            <Link to="/blog/$postId" params={{ postId: post.slug }}>
                              Read More{' '}
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </article>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-muted/30 relative overflow-hidden section-divider">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground mb-8">All Articles</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 75}>
                <Link
                  to="/blog/$postId"
                  params={{ postId: post.slug }}
                  className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 block card-hover"
                >
                  {post.image && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
