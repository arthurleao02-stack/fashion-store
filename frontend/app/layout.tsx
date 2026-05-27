import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion Store',
  description: 'E-commerce de roupas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
