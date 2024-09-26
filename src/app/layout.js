import localFont from "next/font/local";
import  "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Achmed Robeth Muzaki | robeth.my.id x",
  description: "Fullstack Developer & Head of IT di iziRoam. sudah berpengalaman lebih dari 10 tahun di bidang Teknologi",
};

export default function RootLayout({ children }) {


  
  return (
    <html lang="en">
      <body className={''}>
        <link media="all" rel="stylesheet" href="https://d25zvmpxpn9d7y.cloudfront.net/assets/plug/fap582/css/all.min.css" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css" />
        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossorigin />
        <link href="//fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400&display=swap" rel="stylesheet" />

        {children}

      </body>
    </html>
  );
}
