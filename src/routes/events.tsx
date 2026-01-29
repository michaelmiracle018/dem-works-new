import { createFileRoute } from '@tanstack/react-router';
import Events from '~/features/events';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/events')({
  head: () => ({
    meta: seo({
      title: 'Events',
      description: 'This is the events page of my awesome app',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/events.png',
    }),
  }),
  component: Events,
});
