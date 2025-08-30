import { Cardapio } from "@/components/Cardapio";
import { PorqueNosEscolher } from "@/components/PorqueNosEscolher";
import { ProdutosSecao } from "@/components/ProdutosSecao";
import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import Gallery from "./_components/Gallery";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { HeroDoces } from "./_components/HeroDoces";
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
      <HeroDoces />
      <HeroDoces2 />
      <ProdutosSecao />
      <PorqueNosEscolher />
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
