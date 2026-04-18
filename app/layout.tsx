import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Great_Vibes, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junior e Brenda | Através do Universo",
  description: "Você está convidado para celebrar o nosso amor. 12 de Junho de 2026.",
  openGraph: {
    title: "Convite de Casamento: Junior & Brenda",
    description: "Através do Universo: Você está convidado para celebrar o nosso amor. Clique para ver os detalhes do nosso casamento.",
    siteName: 'Junior e Brenda',
    images: [
      {
        url: '/images/image-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Convite de Casamento Junior e Brenda',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convite de Casamento: Junior & Brenda',
    description: 'Você está convidado para celebrar o nosso amor.',
    images: ['/images/image-01.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#1b1c26',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
