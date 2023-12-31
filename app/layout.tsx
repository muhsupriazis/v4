import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import clsx from 'clsx'
import { A } from './components/a'
import { P } from './components/p'
import { Github, Instagram, Linkedin } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Supri',
  description: 'Personal website of Muhammad Supri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="px-6 max-w-2xl mx-auto">
          <Navbar />
        </header>
        <main className="px-6 max-w-2xl mx-auto">
          {children}
        </main>
        <footer className="px-6 max-w-2xl mx-auto">
          <div>
            <P>Find me on</P>
            <div className="flex gap-4">
              <A href="https://www.instagram.com/muhsupriazis/">
                <div className="flex gap-1">
                  <Instagram width={18} />
                  <span>
                    Instagram
                  </span>
                </div>
              </A>
              <A href="https://www.instagram.com/muhsupriazis/">
                <div className="flex gap-1">
                  <Github width={18} />
                  <span>
                    Github
                  </span>
                </div>
              </A>
              <A href="https://www.instagram.com/muhsupriazis/">
                <div className="flex gap-1">
                  <Linkedin width={18} />
                  <span>
                    LinkedId
                  </span>
                </div>
              </A>
            </div>
            <P>
              My inbox is always open. Whether you have a question or just want to say hi,
              I will try my best to get back to you!
            </P>
          </div>
          <div className="py-7">
            <div>
              <p className="text-zinc-400 text-sm py-2 font-light">
                Build by
                <A href="https://antfu.me/"> Muh. Supri Azis </A>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
