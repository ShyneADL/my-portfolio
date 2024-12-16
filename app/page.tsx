import React from "react";
import { Navbar, Hero, About, Projects, Footer } from "@/app/containers";
import Skills from "./containers/Skills";

const Home = () => {
  return (
    <div className="w-full scroll_snap overflow-hidden">
      <div className="flex flex-col items-start justify-around w-full h-[100vh]">
        <section role="navigation" className="w-full">
          <Navbar />
        </section>

        <section
          role="main"
          className="xl:px-[180px] md:px-[60px] px-[16px] w-full"
        >
          <Hero />
        </section>
      </div>

      <section role="article" className="bg-dullPry w-full">
        <About />
      </section>

      <section role="article" className="bg-dullPry w-full">
        <Skills />
      </section>

      <section role="article" className="bg-dullPry w-full">
        <Projects />
      </section>

      <section role="footer" className="w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
