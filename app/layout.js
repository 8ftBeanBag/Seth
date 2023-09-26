import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Help is Here',
  description: 'A helping website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-light-blue'>
        <div className='fixed top-12 left-12'>
          <button className='rounded-full border-teal-900 border-solid text-teal-900 border-2 px-6 py-4'>About</button>
        </div>
        <div className='fixed top-12 right-12'>
          <button className='rounded-full border-bitter border-solid text-bitter border-2 px-6 py-4'>All Resources</button>
        </div>
        {children}
      </body>
    </html>
  )
}
