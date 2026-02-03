import { createFileRoute } from '@tanstack/react-router';
import Home from '~/features/home';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'Home – DemWorks',
      description:
        'DemWorks is a community-driven NGO focused on youth empowerment, education, and social impact.',
      keywords:
        'NGO, community initiatives, campaigns, events, youth empowerment, education, social impact',
    }),
  }),
  component: Home,
});
