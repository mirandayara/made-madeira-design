import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'MADE Madeira Design | Móveis sob medida', description: 'Móveis planejados e sob medida. Do seu jeito.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html>; }
