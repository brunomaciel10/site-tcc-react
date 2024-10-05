import { TemaProjeto } from "@/components/temaProjeto";
import { Cart } from "@/components/cart";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { exemplosTurismo } from "@/data/exemplosTurismo";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <section className='section-about-examples'>
        <TemaProjeto />
        <Cart exemplos={exemplosTurismo} /> {/* carts de exemplos de atividades turíticas */}
      </section>
    </>
  )
}