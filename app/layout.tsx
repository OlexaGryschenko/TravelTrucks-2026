// Кореневий layout (лише <html>, <body>, підключення шрифтів)

import type { Metadata } from 'next';
import { inter, manrope } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'TravelTrucks',
  description: 'Camper rental service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}