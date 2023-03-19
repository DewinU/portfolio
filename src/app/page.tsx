import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Skills from '@/components/skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
          <Skills />
    </main>
  )
}
