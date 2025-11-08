import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxonera - L&apos;Excellence Horlogère',
  description: 'Découvrez notre collection exclusive de montres de luxe. Artisanat suisse, design intemporel et précision exceptionnelle.',
  keywords: ['montres de luxe', 'horlogerie', 'montres suisses', 'Luxonera'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
