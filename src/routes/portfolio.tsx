import { createFileRoute } from '@tanstack/react-router';
import Portfolio from '~/features/portfolio';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/portfolio')({
  head: () => ({
    meta: seo({
      title: 'Portfolio – My App',
      description: 'This is the portfolio page of my awesome app',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/portfolio.png',
    }),
  }),
  component: Portfolio,
});
