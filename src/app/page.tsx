import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero";
import Career from "@/components/career/career";
import Projects from "@/components/projects/projects";
import Stack from "@/components/stack/stack";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
      <main className="flex flex-col">
          <Header/>
          <Hero/>
          <div className="divider px-10 scroll-mt-24 max-sm:py-10" id={"parcours"}>
              <p className="text-4xl font-bold">
                  Parcours
              </p>
          </div>
          <Career/>
          <Projects/>
          <Stack/>
          <Contact/>
          <Footer/>
      </main>
  );
}