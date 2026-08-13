import Navbar from "./components/Navbar";
import AuroraBackground from "./components/AuroraBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
