import { createFileRoute } from '@tanstack/react-router';
import BlogPost from '~/features/blog-post';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/blog/$postId')({
  //  head: () => ({
  //     meta: seo({
  //       title: 'Blogs',
  //       description: 'This is the contact page of my awesome app',
  //       keywords:
  //         'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
  //       image: 'https://myapp.com/og/contact.png',
  //     }),
  //   }),
  component: BlogPost,
});
