import './globals.css'

export const metadata = {
  title: 'Piedra papel tijeras',
  description: 'Es un reto de FrontendMentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
