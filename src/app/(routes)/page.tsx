import { BoxLeft } from '@/components/Box/BoxLeft'
import { BoxRight } from '@/components/Box/BoxRight'
import { Gallery } from '@/components/Gallery'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Gallery />
      <section className="container content-center items-center px-4 pb-8 pt-10 text-center sm:px-8 sm:pb-12 sm:pt-16">
        <h2 className="mx-auto text-wrap font-serif text-xl italic text-white sm:text-3xl lg:w-3/4 xl:w-1/2">
          Um restaurante mediterrâneo aconchegante e nostálgico e um bar de
          vinhos no coração de Belém
        </h2>
      </section>
      <div className="flex flex-col bg-zinc-700">
        <BoxLeft
          name="Menu"
          description="Reimaginando a rica história culinária de Belém através de uma culinária brasileira reconfortante e eclética com fortes influências mediterrâneas."
          button="Menus"
          buttonHref="/menus"
          imageSrc="/images/menu.jpg"
        />
        <BoxRight
          name="Reservas"
          description="Artigiano é um restaurante de bairro e sempre reservamos lugares para os clientes que chegam sem reserva em nossa sala de jantar. As reservas estão disponíveis através do Google."
          button="Reservar uma Mesa"
          buttonHref="/reserve"
          imageSrc="/images/reservation.jpg"
        />
      </div>
    </div>
  )
}
