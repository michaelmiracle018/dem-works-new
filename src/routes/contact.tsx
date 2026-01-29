import { createFileRoute } from '@tanstack/react-router';
import Contact from '~/features/contact';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: seo({
      title: 'Contact Us – My App',
      description: 'This is the contact page of my awesome app',
      keywords:
        'react, tanstack, vite, ssr, design website, mobile apps, web development, backend services, cloud solutions',
      image: 'https://myapp.com/og/contact.png',
    }),
  }),
  component: Contact,
});
