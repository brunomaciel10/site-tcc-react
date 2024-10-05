import { Aboutus } from "@/components/aboutus";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <section className='section-about-examples'>
        <Aboutus />
      </section>
    </>
  )
}