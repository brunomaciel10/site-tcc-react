import { TemaProjeto } from "@/components/temaProjeto";
import { Cart } from "@/components/cart";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { exemplosTurismo } from "@/data/exemplosTurismo";
import { AboutUs } from "@/components/aboutus";
import { actions } from "@/data/actions";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <section className='section-about-examples'>
        <TemaProjeto />
        <Cart itens={exemplosTurismo} /> {/* carts de exemplos de atividades turíticas */}
      </section>
      <section className='bg-dark'>
        <AboutUs />
      </section>
      <section id='actions'>
      <Cart itens={actions} /> {/* carts das ações */}
      </section>
      <section className='bg-dark'>
        <Footer />
      </section>
    </>
  )
}