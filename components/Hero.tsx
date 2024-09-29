import HeroPhoto from './HeroPhoto'

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          {/* Text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Senior Software Engineer</span>
            <h1 className="h1 mb-6 text-7xl font-semibold leading-[1.1]">
              Hello I&apos;m <br />
              <span className="text-accent inline-block bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
                Will Forbes
              </span>
            </h1>
            <p className="max-w[500px] mb-9 text-white/80">I make awesome stuff for the web</p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <button className="rounded-full border border-primary-500 bg-transparent px-8 py-4 font-bold text-white hover:bg-primary-500 hover:bg-opacity-10">
                <span>Download Resume</span>
                {/* <FiDownload className="text-xl" /> */}
              </button>
              <div className="mb-8 xl:mb-0">
                {/* <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                /> */}
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
