import { createFileRoute } from '@tanstack/react-router';
import About from '~/features/about';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seo({
      title: 'About – My App',
      description: 'This is the about page of my awesome app',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: About,
});
