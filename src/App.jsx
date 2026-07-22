import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chapter01Origin from "./chapters/Chapter01Origin";
import Chapter02Transition from "./chapters/Chapter02Transition";

export default function App() {
  return (
    <div className="bg-[#0b0d10] min-h-screen">
      <Nav />
      <Hero />
      <Chapter01Origin />
      <Chapter02Transition />
      {/* About/Skills/Projects still cover ground that chapters 03-08 will
          eventually take over — kept for now so the site stays complete
          while the rest of the narrative is built out. */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
