import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUMÉRA SKINCARE — Natural Glow. Real You.',
  description: 'Meet Glow Serum: an intimate daily ritual for hydrated, naturally radiant-looking skin.',
  openGraph: { title: 'LUMÉRA Glow Serum', description: 'Natural Glow. Real You.', type: 'website' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
