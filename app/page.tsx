import React from "react";
import { Navbar, Hero, About, Projects, Footer } from "@/app/containers";

const Home = () => {
  return (
    <div className="w-full scroll_snap">
      <div className="flex flex-col items-start justify-between w-full md:py-[60px] py-[30px] h-[100vh]">
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

      <section
        role="article"
        className="bg-dullPry xl:px-[180px] md:px-[60px] px-[16px] py-[40px] md:py-[110px]"
      >
        <Projects />
      </section>

      <section role="footer" className="w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
