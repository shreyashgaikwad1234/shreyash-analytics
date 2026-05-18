import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Dashboard from "./components/Dashboard";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Timeline />

      <Dashboard />

      <FeaturedProjects />

      <Contact />

      <Footer />

    </main>
  );
}