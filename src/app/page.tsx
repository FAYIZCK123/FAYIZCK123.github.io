import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      <Hero />
      <About />
      <Education />
      <Skills />
      <ProjectsGrid />
      <Certifications />
      <ContactForm />
    </main>
  );
}
