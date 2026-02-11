import { Footer } from "@/components";
import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
  Services,
  TechStack,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
