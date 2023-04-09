import Image from 'next/image'
import profilePic from 'public/assets/aboutMe/profilepic.jpg'

export default function AboutMe() {
  const who: string = "I'm a FullStack Developer, located in Nicaragua."
  const hobbies: string =
    "When i'm not codying, you can find me fixing and assembling PC's and playing videogames or basketball, i'm a hardware enthusiast and a gamer."
  const skills: string =
    'These activities help me maintain a healthy work-life balance and keep me energized and focused on my work.'

  return (
    <section className='flex flex-row flex-wrap justify-center gap-8'>
      <div className='flex max-w-md flex-col gap-4'>
        <h1 className='pt-5 text-left text-4xl font-extrabold'>About Me</h1>
        <p className='text-left text-xl text-gray-500'>{who}</p>
        <p className='text-left text-xl text-gray-500'>{hobbies}</p>
        <p className='text-left text-xl text-gray-500'>{skills}</p>
      </div>
      <div className='flex flex-col gap-4 p-5'>
        <Image
          className='rounded-md shadow-md'
          src={profilePic}
          alt='profile-pic'
          placeholder='blur'
          width={260}
          height={260}
          priority={true}
        />
        <div className='flex flex-row justify-center gap-4'>
          <Image
            className='rounded-md bg-orange-100 p-2 '
            src='/assets/aboutMe/basketball.svg'
            alt='basketball-icon'
            width={50}
            height={50}
          />
          <Image
            className='rounded-md bg-blue-100 p-2'
            src='/assets/aboutMe/pc.svg'
            alt='pc-icon'
            width={50}
            height={50}
          />
          <Image
            className='rounded-md bg-green-100 p-2'
            src='/assets/aboutMe/gamepad.svg'
            alt='gamepad-icon'
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  )
}
