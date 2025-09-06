// Importa o ícone do WhatsApp de uma biblioteca de ícones
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
// Importa o componente Image do Next.js (otimiza automaticamente as imagens)
import Image from "next/image";
// Importa as imagens que serão usadas no componente
import catImg from "../../../public/cat-hero.png";
import dogImg from "../../../public/hero-dog.webp";

// Função que cria o componente Hero (seção principal da página)
export function Hero() {
  return (
    // Seção principal da página com cor de fundo vermelha e texto branco
    <section
      id="home"
      className="bg-[#E84C3D] text-white relative overflow-hidden"
      // bg-[#E84C3D]: Cor de fundo vermelha personalizada
      // text-white: Texto em cor branca
      // relative: Posicionamento relativo (permite posicionamento absoluto dos filhos)
      // overflow-hidden: Esconde qualquer conteúdo que saia dos limites do container
    >
      {/* Container para a imagem de fundo que aparece apenas em telas pequenas */}
      <div>
        {/* Imagem do cachorro que fica por trás do conteúdo em dispositivos móveis */}
        <Image
          src={dogImg}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
          // object-cover: Redimensiona a imagem mantendo proporção e cobrindo todo container
          // opacity-60: Transparência de 60% (deixa a imagem mais clara)
          // lg:hidden: Esconde a imagem em telas grandes (≥1024px)
        />
        {/* Sobreposição escura para melhorar legibilidade do texto sobre a imagem */}
        <div
          className="absolute inset-0 bg-black opacity-40 md:hidden"
          // absolute: Posicionamento absoluto
          // inset-0: Define top, right, bottom, left como 0 (ocupa todo o container pai)
          // bg-black: Cor de fundo preta
          // opacity-40: Transparência de 40%
          // md:hidden: Esconde em telas médias e maiores (≥768px)
        ></div>
      </div>

      {/* Container principal que centraliza o conteúdo e define espaçamentos */}
      <div
        className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative"
        // container: Largura máxima responsiva (max-width baseado no breakpoint)
        // mx-auto: Margem horizontal automática (centraliza o container)
        // pt-16: Padding-top de 4rem (64px)
        // pb-16: Padding-bottom de 4rem (64px)
        // md:pb-0: Remove padding-bottom em telas médias e maiores
        // px-4: Padding horizontal de 1rem (16px)
        // relative: Posicionamento relativo
      >
        {/* Grade responsiva: 1 coluna em telas pequenas, 2 colunas em telas grandes */}
        <article
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          // grid: Define como container de grade
          // grid-cols-1: 1 coluna por padrão
          // lg:grid-cols-2: 2 colunas em telas grandes (≥1024px)
          // gap-8: Espaçamento de 2rem (32px) entre itens da grade
        >
          {/* Primeira coluna: conteúdo textual e botões */}
          <div
            className="space-y-6"
            // space-y-6: Espaçamento vertical de 1.5rem (24px) entre elementos filhos
          >
            {/* Título principal com tamanhos responsivos e animação */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              // text-3xl: Tamanho de fonte 1.875rem (30px) por padrão
              // md:text-4xl: Tamanho 2.25rem (36px) em telas médias (≥768px)
              // lg:text-5xl: Tamanho 3rem (48px) em telas grandes (≥1024px)
              // font-bold: Peso da fonte em negrito (700)
              // leading-10: Altura da linha de 2.5rem (40px)
              data-aos="fade-down"
            >
              Onde o bem-estar do seu pet ganha vida.
            </h1>
            {/* Parágrafo descritivo com animação de entrada pela direita */}
            <p
              className="lg:text-lg mt-4"
              data-aos="fade-right"
              // lg:text-lg: Tamanho de fonte 1.125rem (18px) em telas grandes
              // mt-4: Margem superior de 1rem (16px)
            >
              Cuidamos do seu pet com carinho, tecnologia e excelência. Agende
              agora seu primeiro atendimento com <strong>5% de desconto</strong>{" "}
              e descubra por que somos referência em saúde e felicidade animal.
            </p>

            {/* Botão de WhatsApp que abre uma conversa pré-configurada */}
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              // bg-green-500: Cor de fundo verde média
              // px-5: Padding horizontal de 1.25rem (20px)
              // py-2: Padding vertical de 0.5rem (8px)
              // rounded-md: Bordas arredondadas médias (6px)
              // font-semibold: Peso da fonte semi-negrito (600)
              // flex: Display flexbox
              // items-center: Alinha itens verticalmente no centro
              // justify-center: Alinha itens horizontalmente no centro
              // w-fit: Largura ajustada ao conteúdo
              // gap-2: Espaçamento de 0.5rem (8px) entre itens flex
            >
              <WhatsappLogo
                className="w-5 h-5"
                // w-5: Largura de 1.25rem (20px)
                // h-5: Altura de 1.25rem (20px)
              />
              Contato via WhatsApp
            </a>

            {/* Seção de informações adicionais sobre desconto e imagem do gato */}
            <div
              className="mt-8"
              // mt-8: Margem superior de 2rem (32px)
            >
              {/* Texto destacando o desconto de 5% */}
              <p
                className="text-sm mb-4"
                // text-sm: Tamanho de fonte 0.875rem (14px)
                // mb-4: Margem inferior de 1rem (16px)
              >
                <b
                  className="bg-black text-white px-2 py-1 rounded-md"
                  // bg-black: Cor de fundo preta
                  // text-white: Cor do texto branca
                  // px-2: Padding horizontal de 0.5rem (8px)
                  // py-1: Padding vertical de 0.25rem (4px)
                  // rounded-md: Bordas arredondadas médias (6px)
                >
                  5%
                </b>{" "}
                de desconto na primeira compra.
              </p>

              {/* Container para a imagem do gato (só aparece em telas grandes) */}
              <div
                className="flex mt-4"
                // flex: Display flexbox
                // mt-4: Margem superior de 1rem (16px)
              >
                <div
                  className="w-32 hidden lg:block"
                  // w-32: Largura de 8rem (128px)
                  // hidden: Escondido por padrão
                  // lg:block: Exibido como block em telas grandes (≥1024px)
                >
                  <Image
                    src={catImg}
                    alt="Foto do gato"
                    className="object-fill"
                    // object-fill: Redimensiona a imagem para preencher todo o container (pode distorcer)
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Segunda coluna: imagem principal do cachorro (só aparece em telas médias/grandes) */}
          <div
            className="hidden md:block h-full relative"
            // hidden: Escondido por padrão
            // md:block: Exibido como block em telas médias e maiores (≥768px)
            // h-full: Altura 100% do container pai
            // relative: Posicionamento relativo
          >
            <Image
              src={dogImg}
              alt="Foto do dog"
              className="object-contain"
              // object-contain: Redimensiona mantendo proporção e cabendo dentro do container
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
