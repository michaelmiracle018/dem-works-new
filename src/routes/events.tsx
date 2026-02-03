import { createFileRoute } from '@tanstack/react-router';
import Events from '~/features/events';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/events')({
  head: () => ({
    meta: seo({
      title: 'Events',
      description: 'This is the events page of my awesome app',
      keywords:
        'NGO, community initiatives, campaigns, events, youth empowerment, education, social impact, gallery',
      image: 'https://myapp.com/og/events.png',
    }),
  }),
  component: Events,
});
