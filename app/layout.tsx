import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: 'Mudit Kumar | Full Stack Developer',
  description:
    'Portfolio of Mudit Kumar — Full Stack Developer skilled in MERN, Java, Python, and Cloud technologies.',
  keywords: ['Mudit Kumar', 'Full Stack Developer', 'MERN', 'React', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Mudit Kumar' }],
  openGraph: {
    title: 'Mudit Kumar | Full Stack Developer',
    description: 'Portfolio of Mudit Kumar — Full Stack Developer.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-dm text-text-primary antialiased">{children}<Analytics /></body>
    </html>
  );
}
