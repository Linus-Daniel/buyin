"use client"
import { BrowserRouter } from 'react-router-dom'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: "Kuves's Store",
//   description: 'Created by Barry',
// }

export default function RootLayout({ children }) {
  return (
    <BrowserRouter>

    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
    </BrowserRouter>
  )
}
