import Image, { StaticImageData } from 'next/image'

export default function SlideContainer({
  image,
  title,
  width,
  height,
}: {
  image: StaticImageData
  title: string
  width?: number
  height?: number
}) {
  return (
    <div className='flex flex-col items-center  justify-center gap-4 py-6'>
      <h2 className='text-center  text-2xl font-bold text-gray-600'>{title}</h2>
      <Image
        src={image}
        alt='azure'
        width={width || 200}
        height={height || 200}
      />
    </div>
  )
}
