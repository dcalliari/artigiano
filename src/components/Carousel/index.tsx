'use client'

import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

type CarouselProps = {
  images: StaticImageData[]
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
            quality={85}
          />
        </div>
      ))}

      <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2">
        <Image
          src="/logo-white.png"
          alt="Artigiano"
          width={350}
          height={0}
          className="h-auto w-32 sm:w-48 md:w-64"
          priority
        />
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Ir para slide ${index + 1}`}
            className={`size-4 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-red-300 hover:bg-red-400'
            } focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
