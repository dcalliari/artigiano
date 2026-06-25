import { Carousel } from '@/components/Carousel'

import img1 from '../../../../public/images/menus/02.jpg'
import img2 from '../../../../public/images/menus/01.jpg'
import img3 from '../../../../public/images/menus/03.jpg'

const IMAGES = [img1, img2, img3]

const LocationPage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="my-8 text-wrap text-center font-serif text-3xl italic text-white sm:text-5xl">
          Horários & Localização
        </h1>
        <p className="text-justify font-serif text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
    </div>
  )
}

export default LocationPage
