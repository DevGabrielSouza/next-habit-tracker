import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next Habit Tracker',
    description: 'A habit tracker built with Next.js',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`${inter.className} flex flex-col items-center justify-center min-h-screen py-2`}
            >
                {children}
            </body>
        </html>
    )
}
