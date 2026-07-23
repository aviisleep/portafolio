import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Chapter01Origin from "./chapters/Chapter01Origin";
import Chapter02Transition from "./chapters/Chapter02Transition";
import Chapter03Code from "./chapters/Chapter03Code";
import Chapter04Stack from "./chapters/Chapter04Stack";
import Chapter05Work from "./chapters/Chapter05Work";
import Chapter06Lab from "./chapters/Chapter06Lab";
import Chapter07Github from "./chapters/Chapter07Github";
import Chapter08Now from "./chapters/Chapter08Now";
import Chapter09Contact from "./chapters/Chapter09Contact";

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <Hero />
      <Chapter01Origin />
      <Chapter02Transition />
      <Chapter03Code />
      <Chapter04Stack />
      <Chapter05Work />
      <Chapter06Lab />
      <Chapter07Github />
      <Chapter08Now />
      <Chapter09Contact />
      <Footer />
    </div>
  );
}
