import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Weather',
  description: 'Check weather anywhere from anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#06283D]">{children}</body>
    </html>
  )
}
