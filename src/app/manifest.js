import { headers } from 'next/headers';
export default function manifest() {
    const headersList = headers();
    let domain = headersList.get('host');
    let proto = headersList.get('x-forwarded-proto');
    return {
        "short_name": "robeth.my.id",
        "name": "robeth.my.id",
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "display": "standalone",
        "icons": [
            {
            "src": "https://umkmku.s3.ap-southeast-1.amazonaws.com/img/20240306-logorobeth.png",
            "type": "image/png",
            "sizes": "48x48"
            },
            {
            "src": "https://umkmku.s3.ap-southeast-1.amazonaws.com/img/20240306-logorobeth.png",
            "type": "image/png",
            "sizes": "96x96"
            },
            {
            "src": "https://umkmku.s3.ap-southeast-1.amazonaws.com/img/20240306-logorobeth.png",
            "type": "image/png",
            "sizes": "144x144"
            },
            {
            "src": "https://umkmku.s3.ap-southeast-1.amazonaws.com/img/20240306-logorobeth.png",
            "type": "image/png",
            "sizes": "192x192"
            }
        ],
        "start_url": proto+'://'+domain+"?utm_source=launcher"
    }
  }