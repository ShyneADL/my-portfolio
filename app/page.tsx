import React from "react";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Services,
  Footer,
} from "@/app/containers";

const Home = () => {
  return (
    <div className="w-full scroll_snap overflow-hidden">
      {/* Hero Section */}
      <div className="w-full">
        <div className="flex flex-col items-center justify-center max-w-[1440px] mx-auto h-[100vh]">
          <div className="w-full">
            <div className="max-w-[1440px] mx-auto">
              <section
                role="navigation"
                className="flex flex-col items-center justify-center w-full"
              >
                <Navbar />
              </section>
            </div>
          </div>

          <section
            role="main"
            className="xl:px-[180px] md:px-[60px] px-[16px] w-full"
          >
            <Hero />
          </section>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-dullPry w-full">
        <div className="max-w-[1440px] mx-auto">
          <About />
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-dullPry w-full">
        <div className="max-w-[1440px] mx-auto">
          <Skills />
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-dullPry w-full">
        <div className="max-w-[1440px] mx-auto">
          <Projects />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-dullPry w-full">
        <div className="max-w-[1440px] mx-auto">
          <Services />
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
