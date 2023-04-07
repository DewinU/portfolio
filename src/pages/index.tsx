import Head from 'next/head'
import AboutMe from '@/components/sections/aboutMe'
import Skills from '@/components/sections/skills'
import Certifications from '@/components/sections/certifications'

const metdaData = {
  title: 'Me | Dewin Umana',
  description: 'Personal Web Portfolio',
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{metdaData.title}</title>
        <meta name='description' content={metdaData.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AboutMe />
      <Skills />
      <Certifications />
    </>
  )
}
