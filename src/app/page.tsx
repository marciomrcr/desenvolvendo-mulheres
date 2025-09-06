import { Cardapio } from "@/components/Cardapio";
import { Destaques } from "@/components/Destaques";
import { PorqueNosEscolher } from "@/components/PorqueNosEscolher";
import ProdutosCards from "@/components/ProdutosCards";
import { ProdutosSecao } from "@/components/ProdutosSecao";
import { Promocional } from "@/components/Promocional";
import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import Gallery from "./_components/Gallery";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { HeroDoces2 } from "./_components/HeroDoces2";
import { MouseTrail } from "./_components/MouseTrail";
import { ScrollToTopButton } from "./_components/ScrollToTopButton";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <Navbar /> */}
      <Hero />
      <Promocional />
      <HeroDoces2 />
      <ProdutosSecao />
      <PorqueNosEscolher />
      <Destaques />
      <ProdutosCards />
      <Cardapio />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <MouseTrail />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
