import Footer from '@/components/layout/Footer/Footer'
import DesktopNavbar from '@/components/layout/Navbar/DesktopNavbar/DesktopNavbar'
import MobileNavbar from '@/components/layout/Navbar/MobileNavbar/MobileNavbar'
import '@styles/globals.css'
import { Sen, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable:"--inter" })

const sen = Sen({
  weight: ['400', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable:"--sens"
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sen.variable} ${inter.variable}`}>
        <DesktopNavbar />
        <MobileNavbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
