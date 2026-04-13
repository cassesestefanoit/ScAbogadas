import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import Nosotras from "./components/Nosotras";
import Testimonios from "./components/Testimonios";
import Contactanos from "./components/Contactanos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Especialidades />
      <Nosotras />
      <Testimonios />
      <Contactanos />
    </main>
  );
}
