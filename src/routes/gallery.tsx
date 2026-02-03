import { createFileRoute } from '@tanstack/react-router';
import Gallery from '~/features/Gallery';

import { seo } from '~/utils/seo';

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: seo({
      title: 'Gallery - Impactful Moments',
      description: 'Explore impactful moments from our community initiatives and campaigns.',
      keywords:
        'NGO, community initiatives, campaigns, events, youth empowerment, education, social impact, gallery',
      image: 'https://myapp.com/og/gallery.png',
    }),
  }),
  component: Gallery,
});
