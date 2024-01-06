//= Global Styles
import "@/styles/globals.css";
import {Metadata} from 'next'

export const metadata = {
  openGraph: {
    title: 'MaxPortfolio',
    image: '/assets/imgs/opengraph-image.jpg',
    description: 'MaxPortfolio - Graphic Design Portfolio of Max van Maasakker'
  },
  title: 'MaxPortfolio',
  image: '/assets/imgs/opengraph-image.jpg',
  description: 'MaxPortfolio - Graphic Design Portfolio of Max van Maasakker',
  keywords: ['Creative Graphic Design', 'Brand Identity Portfolio', 'Visual Communication', 'Portfolio', 'Max van Maasakker', 'MaxPortfolio', 'maxportfolio'],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico"
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
