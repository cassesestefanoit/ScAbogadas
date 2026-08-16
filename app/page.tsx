import Topbar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotras from "./components/Nosotras";
import Especialidades from "./components/Especialidades";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-x-clip">
      <div
        className="relative w-full bg-cover bg-center min-h-[85vh] flex flex-col justify-between"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0B1120] pointer-events-none" />

        <header className="relative z-20">
          <Topbar />
          <Navbar />
        </header>

        <div className="relative z-10 my-auto">
          <Hero />
        </div>
      </div>

      <Nosotras />
      <Especialidades />
      <Contactanos />
      <Footer />
    </main>
  );
}