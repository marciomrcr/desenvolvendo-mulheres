import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { MapPin } from "lucide-react";
import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";

export function About() {
  return (
    <section id="about" className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image src={about2Img} alt="Foto do cachorro 2" fill priority />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p className="text-pretty text-justify">
              Amar um animal é despertar o melhor que há em nós. É por isso que,
              desde 2006, cuidamos de pets como parte da nossa própria família.{" "}
            </p>
            <p className="text-pretty text-justify">
              Com uma equipe experiente, formada por mais de 10 veterinários
              apaixonados pelo que fazem, oferecemos atendimento de excelência,
              produtos selecionados com rigor e um ambiente seguro — tanto na
              loja física quanto na online.
            </p>
            <p className="text-pretty text-justify">
              Aqui, cada detalhe é pensado para garantir o bem-estar do seu pet.
              Atendimento humanizado, suporte rápido e checkout seguro fazem
              parte da nossa missão: proporcionar praticidade, carinho e
              confiança em cada visita.
            </p>
            <h3 className="font-semibold">Seu pet em boas mãos. Sempre.</h3>

            <div className="flex gap-2">
              <a
                target="_blank"
                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
