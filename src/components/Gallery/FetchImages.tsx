import Image from 'next/image'

export async function FetchImages({ images }: { images: Array<string> }) {
  const half = Math.ceil(images.length / 2)
  const left = images.slice(0, half)
  const right = images.slice(half)

  return (
    <div className="flex flex-col px-2 sm:flex-row">
      <div className="w-full sm:w-1/2">
        <ul>
          {left.map((el, i) => (
            <li key={el}>
              <Image
                src={`/photos/${el}`}
                alt=""
                width={1800}
                height={1200}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="size-full px-2 pt-4"
                loading={i === 0 ? 'eager' : 'lazy'}
                priority={i === 0}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full sm:w-1/2">
        <ul>
          {right.map((el) => (
            <li key={el}>
              <Image
                src={`/photos/${el}`}
                alt=""
                width={1800}
                height={1200}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="size-full px-2 pt-4"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
