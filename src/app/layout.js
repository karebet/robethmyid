import localFont from "next/font/local";
import  "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import { Poppins } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Favicon from '/public/20240306-logorobeth.ico';
import { headers } from 'next/headers';

export const metadata = {
  title: "Achmed Robeth Muzaki | robeth.my.id",
  description: "Fullstack Developer & Head of IT di iziRoam. sudah berpengalaman lebih dari 10 tahun di bidang Teknologi. Sering membuat Aplikasi / Web: CMMS, GIS & ERPE-Commerce , Company Profile & Toko Online, Mobile Applications & Game",
  keywords:["fullstack", "developer", "development", "web developer", "jakarta", "web", "aplikasi apps", "yogyakarta", "mobile apps"],
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    title: 'Achmed Robeth Muzaki | robeth.my.id',
    description: "Fullstack Developer & Head of IT di iziRoam. sudah berpengalaman lebih dari 10 tahun di bidang Teknologi",
    images: 'https://umkmku.s3.ap-southeast-1.amazonaws.com/img/20240306-logorobeth.png',
  },
};

const fontpopins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})



export default function RootLayout({ children }) {

  const headersList = headers();
  let domain = headersList.get('host');
    let proto = headersList.get('x-forwarded-proto');
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://d25zvmpxpn9d7y.cloudfront.net/assets/plug/fap582/css/all.min.css" />
        <link rel="canonical" href={proto+'://'+domain} key="canonical" />
      </head>
      <GoogleTagManager gtmId="G-S30XTKRLRY" />
      <body className={fontpopins.className}>
        {children}
      </body>
    </html>
  );
}
