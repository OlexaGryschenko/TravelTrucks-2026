import { Inter, Manrope } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-family',
  display: 'swap',
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--second-family',
  display: 'swap',
});