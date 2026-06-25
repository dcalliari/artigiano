import { CardGrid } from '@/components/CardGrid'
import { Carousel } from '@/components/Carousel'
import { Button } from '@/components/Button'

import img1 from '../../../../public/images/reserve/03.jpg'
import img2 from '../../../../public/images/reserve/02.jpg'
import img3 from '../../../../public/images/reserve/01.jpg'

const IMAGES = [img1, img2, img3]

const OrderPage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="my-8 text-wrap text-center font-serif text-3xl italic text-white sm:text-5xl">
          Peça agora
        </h1>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Aproveite o Artigiano onde quiser! Oferecemos nosso cardápio completo
          para retirada e entrega através de nosso parceiro de entrega, iFood.
          Para pedidos para retirada, você pode ligar diretamente para o
          restaurante no número (91) 3241-3337.
        </p>
        <Button
          href="https://www.ifood.com.br/delivery/belem-pa/la-traviata-reduto"
          title="iFOOD"
        />
      </div>
      <CardGrid />
    </div>
  )
}

export default OrderPage
