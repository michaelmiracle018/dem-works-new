import { createFileRoute } from '@tanstack/react-router';
import Home from '~/features/home';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'Home – DemWorks',
      description: 'This is the homepage of my awesome app',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/home.png',
    }),
  }),
  component: Home,
});
