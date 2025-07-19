// Importações necessárias para o componente
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import catImg from "../../../public/cat-hero.png";
import dogImg from "../../../public/hero-dog.webp";

// Constantes do componente
const WHATSAPP_NUMBER = "5591988534110";
const WHATSAPP_MESSAGE = "Olá vim pelo site e gostaria de mais informações";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-[#E84C3D] text-white relative overflow-hidden"
    >
      {/* Imagem de fundo para dispositivos móveis com overlay escuro */}
      <div>
        <Image
          src={dogImg}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      {/* Container principal com layout responsivo */}
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna do conteúdo textual */}
          <div className="space-y-6">
            {/* Título principal com animação */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Onde o bem-estar do seu pet ganha vida.
            </h1>

            {/* Descrição dos serviços */}
            <p className="lg:text-lg mt-4" data-aos="fade-right">
              Cuidamos do seu pet com carinho, tecnologia e excelência. Agende
              agora seu primeiro atendimento com <strong>5% de desconto</strong>{" "}
              e descubra por que somos referência em saúde e felicidade animal.
            </p>

            {/* Botão de contato via WhatsApp */}
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            {/* Seção de desconto e imagem decorativa */}
            <div className="mt-8">
              {/* Badge de desconto destacado */}
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra.
              </p>

              {/* Imagem do gato (visível apenas em desktop) */}
              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="Foto do gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da imagem principal (visível em tablet/desktop) */}
          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="Foto do dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
