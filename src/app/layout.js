import localFont from "next/font/local";
import  "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import { Poppins } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Favicon from '/public/20240306-logorobeth.ico';

export const metadata = {
  title: "Achmed Robeth Muzaki | robeth.my.id",
  description: "Fullstack Developer & Head of IT di iziRoam. sudah berpengalaman lebih dari 10 tahun di bidang Teknologi",
  icons: [{ rel: 'icon', url: Favicon.src }]
};

const fontpopins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://d25zvmpxpn9d7y.cloudfront.net/assets/plug/fap582/css/all.min.css" />
      </head>
      <GoogleTagManager gtmId="G-S30XTKRLRY" />
      <body className={fontpopins.className}>
        {children}
      </body>
    </html>
  );
}
