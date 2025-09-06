import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import golden from "../../../public/golden.png";
import natural from "../../../public/natural.png";
import primier from "../../../public/primier.png";
import royal from "../../../public/royal.png";
import whiskas from "../../../public/whiskas.png";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div className="flex flex-col items-center md:items-start justify-center mb-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/logoPet.webp"
                alt="Logo marca pet"
                width={120}
                height={120}
                priority
                className="object-cover w-20 h-20 mb-2 md:mb-0 md:w-24 md:h-24 mx-auto md:mx-0"
              />
              <span className="font-bold text-4xl text-[#FDF6EC]">
                Love<span className="text-[#FFD449]">Pet</span>
              </span>
            </div>
            <div>
              <p className="mb-4 ">
                Cuidando do seu melhor amigo <br />
                com amor ❤️ e dedicação 🫶
              </p>
            </div>
            <a
              id="contact"
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-[#1E293B] px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              rel="noopener noreferrer"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (XX) 1231831238</p>
            <p>Rua X, centro, Campo Grande | MS</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank">
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <YoutubeLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
