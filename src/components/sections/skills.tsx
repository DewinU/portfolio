import Image from 'next/image'

export default function Skills() {
  const Subtitle: string =
    "Building Dynamic and Engaging Web Applications and API's with the Latest Technologies"
  return (
    <section>
      <div className='flex flex-col items-center p-10 text-center'>
        <h1 className='p-5 text-4xl font-extrabold'>Skills</h1>
        <p className='text-2xl'>{Subtitle}</p>
      </div>

      <div className='flex flex-wrap justify-center gap-20'>
        <div>
          <h2 className='text-center text-xl font-bold text-gray-500'>
            Frontend
          </h2>
          <div className='grid grid-cols-2 place-items-center gap-5 rounded-lg p-5 shadow-2xl'>
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/vue.svg'
              alt='vue'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/react.svg'
              alt='react'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/angular.svg'
              alt='angular'
              width={70}
              height={70}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/html5.svg'
              alt='html'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/css3.svg'
              alt='css'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/javascript.svg'
              alt='typescript'
              width={75}
              height={75}
            />
          </div>
        </div>

        <div>
          <h2 className='text-center text-xl font-bold text-gray-500'>
            Backend
          </h2>
          <div className='grid grid-cols-2 place-items-center gap-5 rounded-lg p-5 shadow-2xl'>
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/node.svg'
              alt='typescript'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/nextjs.svg'
              alt='typescript'
              width={70}
              height={70}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/express.svg'
              alt='typescript'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/wordpress.svg'
              alt='typescript'
              width={70}
              height={70}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/laravel.svg'
              alt='typescript'
              width={80}
              height={80}
            />
          </div>
        </div>

        <div>
          <h2 className='text-center text-xl font-bold text-gray-500'>Other</h2>
          <div className='grid grid-cols-2 place-items-center gap-5 rounded-lg p-5 shadow-2xl'>
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/azure.svg'
              alt='typescript'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/aws.svg'
              alt='typescript'
              width={80}
              height={80}
            />
            <Image
              className='grayscale transition-all duration-200 ease-linear hover:grayscale-0'
              src='assets/skills/git.svg'
              alt='typescript'
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
