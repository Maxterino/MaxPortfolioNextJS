//= Global Styles
import "@/styles/globals.css";
import {Metadata} from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
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
      <Analytics />
      <SpeedInsights/>
    </html>
  )
}
