import { headers } from 'next/headers';
export default function sitemap() {
    const headersList = headers();
  let domain = headersList.get('host');
    let proto = headersList.get('x-forwarded-proto');
    return [
      {
        url: proto+'://'+domain,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ]
  }