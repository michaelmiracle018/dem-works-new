import { useParams, Link, Navigate } from '@tanstack/react-router';
import { Layout } from '~/components//layout/layout';
import { ArrowLeft, Calendar, User, Clock, Tag, ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { getBlogPostBySlug, getRelatedPosts } from '~/lib/blog-data';
import { AnimatedSection } from '~/hooks/use-scroll-animation';
import { FloatingShapes } from '~/components/ui/floating-shapes';

const BlogPost = () => {
  const { postId } = useParams({ from: '/blog/$postId' });

  const post = postId ? getBlogPostBySlug(postId) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors group animate-fade-in"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <span className="inline-block text-sm font-semibold text-primary-foreground bg-white/20 px-3 py-1 rounded-full mb-4 animate-fade-in delay-100">
              {post.category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up delay-200">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80 animate-fade-up delay-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background relative overflow-hidden">
        <FloatingShapes variant="minimal" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-a:text-primary">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>')
                      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-8 mb-3">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(
                        /^> (.*$)/gm,
                        '<blockquote class="border-l-4 border-primary pl-4 italic my-4">$1</blockquote>'
                      )
                      .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
                      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4 list-decimal">$2</li>')
                      .replace(/\n\n/g, '</p><p class="mb-4">'),
                  }}
                />
              </article>
            </AnimatedSection>

            {/* Share Section */}
            <AnimatedSection delay={200}>
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 group">
                    <Tag className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-foreground">Category:</span>
                    <Link
                      to="/blog"
                      search={{ category: post.category }}
                      className="text-primary hover:underline link-underline"
                    >
                      {post.category}
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30 relative overflow-hidden section-divider">
          <FloatingShapes variant="section" />
          <div className="container mx-auto px-4 relative">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection key={relatedPost.id} delay={index * 100}>
                  <Link
                    to="/blog/$postId"
                    params={{ postId: relatedPost.slug }}
                    className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 block card-hover"
                  >
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                      Read More{' '}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Want to Learn More?</h2>
            <p className="text-muted-foreground mb-6">
              Explore our programs and resources to stay informed about cybersecurity and drug
              awareness.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="hero-gradient text-primary-foreground btn-glow group">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
