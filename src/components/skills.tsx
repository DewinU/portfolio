import Image from 'next/image';

export default function Skills() {
  return (
    <section>
      <div className="p-10 text-center flex items-center flex-col">
        <h1 className="p-5 text-4xl font-extrabold">Skills</h1>
        <p className="text-2xl w-2/5">Building Dynamic and Engaging Web Applications and API's with the Latest Technologies</p>
      </div>

      <div className="flex justify-center gap-20 flex-wrap">
        <div>
          <h2 className="text-xl font-bold text-gray-500 text-center">Frontend</h2>
          <div className="rounded-lg grid grid-cols-2 gap-5 p-5 shadow-2xl place-items-center">
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              
              src="assets/skills/vue.svg"
              alt="vue"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/react.svg"
              alt="react"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/angular.svg"
              alt="angular"
              width={70}
              height={70}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/html5.svg"
              alt="html"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/css3.svg"
              alt="css"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/javascript.svg"
              alt="typescript"
              width={75}
              height={75}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-500 text-center">Backend</h2>
          <div className="rounded-lg grid grid-cols-2 gap-5 p-5 shadow-2xl place-items-center">
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/node.svg"
              alt="typescript"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/nextjs.svg"
              alt="typescript"
              width={70}
              height={70}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/express.svg"
              alt="typescript"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/wordpress.svg"
              alt="typescript"
              width={70}
              height={70}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/laravel.svg"
              alt="typescript"
              width={80}
              height={80}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-500 text-center">Other</h2>
          <div className="rounded-lg grid grid-cols-2 gap-5 p-5 shadow-2xl place-items-center">
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/azure.svg"
              alt="typescript"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/aws.svg"
              alt="typescript"
              width={80}
              height={80}
            />
            <Image className="grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
              src="assets/skills/git.svg"
              alt="typescript"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
