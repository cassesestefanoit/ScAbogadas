import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import Nosotras from "./components/Nosotras";
import Contactanos from "./components/Contactanos";
import Testimonios from "./components/Testimonios"

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
