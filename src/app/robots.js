import { headers } from 'next/headers';
export default function robots() {
    
  const headersList = headers();
  let domain = headersList.get('host');
    let proto = headersList.get('x-forwarded-proto');
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: proto+'://'+domain+'/sitemap.xml',
    }
  }