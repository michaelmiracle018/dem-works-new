import { createFileRoute } from '@tanstack/react-router';
import Services from '~/features/services';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: seo({
      title: 'Services – My App',
      description: 'This is the services page of my awesome app',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/services.png',
    }),
  }),
  component: Services,
});
