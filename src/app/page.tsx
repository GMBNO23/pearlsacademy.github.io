
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';



export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Contact />
      
      </main>
  );
}