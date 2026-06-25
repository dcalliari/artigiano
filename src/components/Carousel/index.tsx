'use client'

import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

type CarouselProps = {
  images: StaticImageData[]
}

export function Carousel({ images }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images])

  const handleButtonClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 my-4 flex items-center justify-center overflow-hidden p-4">
        {images[currentImageIndex] && (
          <Image
            key={`${images[currentImageIndex].src}-${currentImageIndex}`}
            alt={`Slide ${currentImageIndex + 1}`}
            className="h-screen w-screen object-cover"
            height="720"
            src={images[currentImageIndex].src}
            style={{
              aspectRatio: '1280/720',
              objectFit: 'cover',
            }}
            width="1280"
          />
        )}
      </div>
      <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-4">
        <Image
          loading="eager"
          className="h-auto w-32 sm:w-48 md:w-64"
          src="/logo-white.png"
          alt="Logo"
          width={350}
          height={0}
        />
      </div>
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`size-4 rounded-full ${
              index === currentImageIndex
                ? 'bg-white'
                : 'bg-red-300 hover:bg-red-400'
            } focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
