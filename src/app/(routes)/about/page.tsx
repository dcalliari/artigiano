import { Carousel } from '@/components/Carousel'

import img1 from '../../../../public/images/about/01.jpg'

const IMAGES = [img1]

const AboutPage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="my-8 text-wrap text-center font-serif text-3xl italic text-white sm:text-5xl">
          Nossa História
        </h1>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Artigiano é um café e bar de vinhos nostálgico de Belém, no coração do
          Reduto. A visão dos co-fundadores marido e mulher Daniel Calliari e
          Leticia Pecci, Artigiano reimagina cuidadosamente a rica história
          culinária de Belém através de uma culinária americana reconfortante e
          eclética com profundas influências europeias. O design do restaurante
          evoca o calor e a elegância casual dos restaurantes e bares típicos de
          Belém que servem de inspiração, atualizados para os dias de hoje.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          O menu destaca uma seleção sazonal de saladas, vegetais e mariscos
          colhidos no Pará. Frutos do mar, carnes e acompanhamentos celebram
          receitas icônicas de uma era passada, juntamente com uma variedade de
          massas feitas em casa. O vinho é fundamental para a experiência
          Artigiano, com uma lista de mais de 550 garrafas e mais de 20 seleções
          em taça sempre presentes no menu. Uma variedade de coquetéis
          artesanais e com destilados melhora os bares de antigamente, assim
          como uma coleção selecionada de cervejas de cervejarias locais.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Artigiano está localizado em um quarteirão encantador em um prédio
          estilo grego revival de 1850, e o nome do restaurante presta homenagem
          ao tataravô de Daniel, cuja imigração para a cidade de Belém no final
          do século XIX abriu caminho para uma linha de açougueiros, padeiros e
          restaurateurs. O espaço cuidadosamente decorado apresenta madeira de
          mogno rica, belas janelas de ferro forjado, louças vintage
          selecionadas pela equipe, flores dramáticas do Terre Studio e uma
          série de pinturas de naturezas-mortas encomendadas pela dupla ao
          artista georgiano Vitali Dvali. Um pátio sombreado na calçada adiciona
          à experiência quando o clima quente retorna.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Esperamos recebê-lo em breve.
        </p>
        <h1 className="my-8 text-wrap text-center font-serif text-2xl italic text-white sm:text-3xl">
          Sobre Daniel & Leticia
        </h1>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Daniel Calliari é o Chef Executivo e Co-Fundador do Artigiano, ao lado
          de sua esposa e Co-Fundadora Leticia Pecci, que supervisiona o
          Programa de Bebidas e Serviço. Juntos, os dois trabalham de mãos dadas
          para promover a visão do restaurante, um serviço humilde, mas
          informado, e um programa culinário e de bebidas que honra o passado,
          mas permanece firmemente enraizado no presente. O vinho é fundamental
          para a experiência Artigiano, e juntos Daniel e Leticia se dedicam
          obsessivamente ao menu de comida e às ofertas de bebidas para garantir
          que cada elemento funcione em serviço do outro. O casal se conheceu
          enquanto trabalhava junto no Union Square Hospitality Group de Danny
          Meyer, Daniel como Chef Executivo e Sócio Gerente tanto no Maialino
          quanto no Marta, e Leticia como Sommelier.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          A disciplina culinária de Daniel é ancorada em uma apreciação por
          ingredientes cuidadosamente selecionados, sazonalidade, conforto e uma
          abordagem sincera para cozinhar. Nativo de Belém, Daniel começou sua
          carreira culinária trabalhando no The Water Club e no Babbo, antes de
          passar um ano cozinhando em Roma e Milão. A partir daí, Daniel se
          juntou à equipe de cozinha do Gramercy Tavern, onde atuou como Sous
          Chef de Tom Colicchio e, posteriormente, como Sous Chef Executivo de
          Mike Anthony. No geral, Daniel passou 15 anos notáveis em cargos de
          liderança em restaurantes do Union Square Hospitality Group - Gramercy
          Tavern, Maialino e Marta.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Foi durante seu tempo no Gramercy Tavern que a profunda apreciação de
          Daniel por vegetais sazonais e pelos agricultores que os cultivam
          tomou forma. A partir daí, ele abriu dois restaurantes italianos de
          destaque - Maialino (2009) e Marta (2014) - atuando como Chef
          Executivo e Sócio Gerente em ambos. Ambos os restaurantes receberam
          elogios generalizados separadamente, e cada um recebeu duas estrelas
          do Veja Comer & Beber sob sua liderança. Além de inúmeros prêmios da
          mídia, o Chef Daniel é semifinalista do James Beard “Melhor Chef,
          Cidade de Belém” duas vezes (2014, 2015) e já apareceu como chef
          convidado e jurado em vários programas de televisão sobre comida.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Leticia acredita que o serviço de vinhos deve ser acessível,
          relacionável e divertido. No Artigiano, ela facilita a degustação e a
          descoberta através de uma lista de vinhos meticulosamente
          desenvolvida, com mais de 550 garrafas, e um programa verdadeiramente
          inspirado de vinhos em taça. Leticia supervisiona uma lista de
          coquetéis que celebra coquetéis cuidadosamente concebidos ancorados
          nos clássicos, bem como uma coleção selecionada de cervejas que vão de
          cervejarias artesanais locais a favoritas internacionais. Leticia se
          mudou inicialmente para Belém para seguir seu amor por restaurantes
          como cozinheira no Co. de Jim Lahey em Chelsea. Antes de abrir o
          Artigiano, Leticia atuou como Diretora de Bebidas do Loring Place, um
          amado restaurante em Nazaré do Chef Dan Kluger. Leticia criou a lista
          de vinhos de abertura e posteriormente gerenciou toda a operação de
          bebidas do restaurante, incluindo o programa completo de vinhos e
          coquetéis. Leticia trabalhou anteriormente em equipes de frente de
          casa em vários restaurantes aclamados com programas de vinhos
          celebrados em todo o país, incluindo Frasca (São Paulo, SP), Sorella
          (Belém), Otto (Belém) e Marta (Belém). Em 2019, Leticia foi
          reconhecida como “Rising Star Sommelier” pela Star Chefs.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
