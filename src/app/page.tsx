import { Inter } from 'next/font/google'
import Skills from '@/components/sections/skills'
import Portofilo from '@/components/sections/portoflio'
import AboutMe from '@/components/sections/aboutMe'
import Certifications from '@/components/sections/certifications'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main id='canvas' className={inter.className}>
        <AboutMe />
        <Skills />
        {/* <Portofilo />
        <Certifications /> */}
      </main>
    </>
  )
}
