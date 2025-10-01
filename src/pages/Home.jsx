import React from "react";
import profileImg from "../assets/profile.png";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1c1e26] min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between mt-10">
          {/* Text kiri */}
          <div className="text-left max-w-xl">
            <p className="uppercase tracking-widest text-gray-400 text-sm mb-4">
              Welcome to my world
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Hi, I’m <span className="text-pink-500">Hilmy</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              a UI/UX Designer
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              I use animation as a third dimension by which to simplify
              experiences and guiding through each and every interaction. I’m
              not adding motion just to spruce things up, but doing it in ways
              that.
            </p>

            {/* Social & Skill */}
            <div className="flex gap-10">
              {/* Sosmed */}
              <div>
                <h3 className="text-gray-400 text-sm mb-3">Find with me</h3>
                <div className="flex gap-4 text-white text-xl">
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              {/* Skills */}
              <div>
                <h3 className="text-gray-400 text-sm mb-5">Best skill on</h3>
                <div className="flex gap-4 text-white text-xl">
                  <i className="fab fa-figma"></i>
                  <i className="fab fa-sketch"></i>
                  <i className="fab fa-invision"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Foto kanan */}
          <div className="mt-10 md:mt-0">
            <img
              src={profileImg}
              alt="Profile"
              className="w-72 md:w-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
