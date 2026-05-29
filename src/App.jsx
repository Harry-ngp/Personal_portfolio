import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <div className="relative bg-dark-900 min-h-screen overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[250px] pointer-events-none animate-[pulse-glow_4s_ease-in-out_infinite]" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[250px] pointer-events-none animate-[pulse-glow_4s_ease-in-out_infinite_reverse]" />

      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CompetitiveProgramming />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
