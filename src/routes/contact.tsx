import { createFileRoute } from '@tanstack/react-router';
import Contact from '~/features/contact';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: seo({
      title: 'Contact Us – My App',
      description:
        'Get in touch with DemWorks: Reach out for inquiries, support, or to learn more about our community initiatives and social impact.',
      keywords:
        'NGO, community initiatives, campaigns, events, youth empowerment, education, social impact, gallery',
      image: 'https://myapp.com/og/contact.png',
    }),
  }),
  component: Contact,
});
