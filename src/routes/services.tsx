import { createFileRoute } from '@tanstack/react-router';
import Services from '~/features/services';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: seo({
      title: 'Services – My App',
      description: 'Discover DemWorks Services.',
      keywords:
        'NGO, community initiatives, campaigns, events, youth empowerment, education, social impact',
      image: 'https://myapp.com/og/services.png',
    }),
  }),
  component: Services,
});
