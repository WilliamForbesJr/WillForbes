// "use client";

// import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="relative h-full w-full">
      <div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* Image */}
        <div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: 'easeInOut' },
          }}
          className="absolute h-[298px] w-[298px] xl:h-[498px] xl:w-[498px]"
        >
          <Image
            src="/static/images/william.png"
            priority
            quality={100}
            fill
            alt=""
            className="rounded-full bg-slate-950 object-contain"
            style={{ zIndex: '-1' }}
          />
        </div>
        <svg
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="250"
            cy="250"
            r="250"
            stroke="#1e293b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </svg>
      </div>
    </div>
  )
}

export default Photo
