import { createFileRoute } from '@tanstack/react-router';
import Sponsors from '~/features/sponsors';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/sponsors')({
  head: () => ({
    meta: seo({
      title: 'Sponsors – My App',
      description: 'This is the sponsors page of my awesome app',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/sponsors.png',
    }),
  }),
  component: Sponsors,
});
