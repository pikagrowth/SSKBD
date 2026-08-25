import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || BUSINESS_DETAILS.website || 'https://www.samarthkrupabuilders.com';

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/og/'],
      disallow: ['/api/', '/admin/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}