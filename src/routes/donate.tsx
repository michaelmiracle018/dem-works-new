import { createFileRoute } from '@tanstack/react-router';
import Donate from '~/features/donate';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/donate')({
  head: () => ({
    meta: seo({
      title: 'Donate',
      description: 'Donate to support our cause and help us make a difference.',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: Donate,
});
