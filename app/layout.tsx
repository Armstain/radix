import type {Metadata} from 'next';
import { Playfair_Display, Syne, Lora, Space_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--ff-display',
  weight: ['400', '700', '800', '900'],
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--ff-sub',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--ff-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--ff-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RADIX Studio — Interior & Construction | Architecture & Design Dhaka',
  description: 'RADIX Studio is a premier architectural consultancy and interior design firm in Bangladesh. Providing innovative living space solutions since 2000.',
  keywords: ['Interior Design', 'Construction', 'Architecture', 'Dhaka', 'Bangladesh', 'Living Space', 'RADIX Studio'],
  authors: [{ name: 'RADIX Studio' }],
  metadataBase: new URL('https://radix-studio.com'), // Assuming base URL
  openGraph: {
    title: 'RADIX Studio — Interior & Construction',
    description: 'We Shape Living Space. Premier architectural consultancy and interior design in Bangladesh.',
    url: 'https://radix-studio.com',
    siteName: 'RADIX Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RADIX Studio — Interior & Construction',
    description: 'We Shape Living Space. Premier architectural consultancy and interior design in Bangladesh.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${syne.variable} ${lora.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
