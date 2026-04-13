import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import Nosotras from "./components/Nosotras";
import Comentarios from "./components/Comentario"
import Contactanos from "./components/Contactanos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Especialidades />
      <Nosotras />
      <Comentarios />
      <Contactanos />
    </main>
  );
}
