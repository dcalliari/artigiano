import { Carousel } from '@/components/Carousel'
import { ReservationSheet } from '@/components/ReservationSheet'

import img1 from '../../../../public/images/reserve/01.jpg'
import img2 from '../../../../public/images/reserve/02.jpg'
import img3 from '../../../../public/images/reserve/03.jpg'

const IMAGES = [img1, img2, img3]

const ReservePage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="my-8 text-wrap text-center font-serif text-3xl italic text-white sm:text-5xl">
          Reservas
        </h1>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Aceitamos reservas todos os dias da semana, com até 30 dias de
          antecedência, através do Google.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Para grupos de nove ou mais pessoas, por favor envie um e-mail para{' '}
          <a href="mailto:feasts@artigiano.com">feasts@artigiano.com</a>.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Por favor, observe que não aceitamos reservas para lugares no bar. O
          Artigiano é um restaurante de bairro e sempre reservamos um número de
          lugares para clientes sem reserva em nosso salão e bar. Quando o
          restaurante estiver cheio, teremos prazer em anotar seu nome e número
          e avisar quando uma mesa estiver disponível.
        </p>
        <ReservationSheet />
      </div>
    </div>
  )
}

export default ReservePage
