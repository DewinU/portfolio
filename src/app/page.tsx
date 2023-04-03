import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Skills from '@/components/sections/skills'
import Portofilo from '@/components/sections/portoflio'
import AboutMe from '@/components/sections/aboutMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main id='canvas' className={inter.className}>
      <AboutMe />
      <Skills />
      <Portofilo />
    </main>
  )
}
