import { Button } from '@/components/Button'

import Image from 'next/image'

type BoxLeftProps = {
  name: string
  description: string
  button: string
  buttonHref: string
  imageSrc: string
}

export function BoxLeft({
  name,
  description,
  button,
  buttonHref,
  imageSrc,
}: BoxLeftProps) {
  return (
    <div className="m-2 mt-4 flex flex-col sm:flex-row">
      <div className="mx-2 w-full bg-zinc-900 px-6 py-10 text-white sm:w-1/2 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <h2 className="mb-4 text-wrap font-serif text-2xl italic text-white sm:text-3xl lg:w-3/4 xl:w-1/2">
          {name}
        </h2>
        <p className="mb-10 font-serif text-lg sm:mb-16">{description}</p>
        <Button href={buttonHref} title={button} />
      </div>
      <div className="relative mx-2 min-h-[240px] w-full bg-slate-500 sm:min-h-0 sm:w-1/2">
        <Image
          loading="lazy"
          src={imageSrc}
          alt="Image"
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
