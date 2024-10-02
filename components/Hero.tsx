import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="h1 mb-0 inline-block text-9xl font-semibold uppercase leading-[1.1] tracking-tighter text-white">
          Will Forbes
        </h1>
        <div className="mb-6 text-2xl leading-tight tracking-wider">Senior Software Engineer</div>
        <p className="mb-10 max-w-[500px] text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae doloremque omnis, sint
          vero veritatis doloribus accusantium natus minus laborum nulla suscipit iusto voluptatibus
          delectus itaque, esse mollitia odit similique.
        </p>
        <div>
          <button className="rounded-full border border-primary-500 bg-transparent px-8 py-4 font-bold text-white hover:bg-primary-500 hover:bg-opacity-10">
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute -right-[55%] bottom-0 -z-10 h-[900px] w-[1200px]">
        <Image
          src="/static/images/william_crop.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
