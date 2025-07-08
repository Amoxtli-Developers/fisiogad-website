import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fisiogad.com.mx'),
  title: 'Fisiogad - Servicios de Fisioterapia Personalizada',
  description:
    'Tratamientos profesionales de fisioterapia a domicilio con atención personalizada para lesiones deportivas, lesiones por actividades diarias y dolores ocasionales.',
  keywords: ['fisioterapia', 'lesiones deportivas', 'descarga muscular', 'lesiones', 'rehabilitación', 'fisioterapia colonia del valle', 'fisioterapia benito juárez'],
  creator: 'Fisiogad',
  authors: [{ name: 'Fisiogad', url: 'https://fisiogad.com.mx' }],
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'Fisiogad - Servicios de Fisioterapia Personalizada',
    description:
      'Recupera tu bienestar con fisioterapia a domicilio. Atención especializada y profesional en cada sesión.',
    url: 'https://fisiogad.com.mx',
    siteName: 'Fisiogad',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Fisiogad fisioterapia personalizada',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fisiogad - Servicios de Fisioterapia Personalizada',
    description:
      'Fisioterapia profesional para tu bienestar físico. Atención especializada en casa.',
    images: ['/logo.svg'],
    site: '@fisiogad',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
