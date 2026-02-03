import { createFileRoute } from '@tanstack/react-router';
import About from '~/features/about';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seo({
      title: 'About – My App',
      description:
        'About DemWorks: Our mission, vision, and the passionate team driving our community initiatives and social impact.',
      keywords:
        'NGO, community initiatives, campaigns, events, youth empowerment, education, social impact, gallery',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: About,
});
