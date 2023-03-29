export default function AboutMe(){
    const Subtitle: string = "I'm a FullStack Developer with a passion for building dynamic and engaging web applications and API's with the latest technologies."
    return (
        <section>
        <div className='flex flex-col items-center p-10 text-center'>
            <h1 className='p-5 text-4xl font-extrabold'>About Me</h1>
            <p className='text-2xl'>
            {Subtitle}
            </p>
        </div>
        <div className='flex flex-col items-center text-center '>
            <p className='text-2xl'>🚧 Under Construction 🚧</p>
        </div>
        </section>
    )
}