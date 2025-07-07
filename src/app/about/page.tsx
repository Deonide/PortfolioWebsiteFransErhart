import Navbar from "@/Components/NavBar";
import Image from "next/image";
import Footer from "@/Components/Footer";
import { FaFile} from "react-icons/fa";
import {SiUnity, SiDotnet,SiHtml5, SiCss3, SiGit, SiLinkedin, SiMaildotru} from 'react-icons/si';

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center pt-24 px-6 pb-24">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-6">          
          <Image
            className="rounded-full border-4 border-gray-700 shadow-lg"
            src="/Img/frans.jpg"
            alt="Frans Erhart"
            width={150}
            height={150}
          />
          <h1 className="text-4xl font-bold">Frans Erhart</h1>
        </div>

        {/* About Me Section */}
        <section className="mt-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            My name is Frans Erhart, a developer currently studying at Grafisch Lyceum Utrecht. I enjoy creating games and exploring new technologies.
          </p>
        </section>

        {/* Hobbies Section */}
        <section className="mt-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Hobbies</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            In my free time, I enjoy programming, watching anime, hanging out with friends, playing Magic: The Gathering, and gaming.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <SiDotnet className="text-purple-600 text-2xl" />
              <span>C#</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <SiUnity className="text-white text-2xl" />
              <span>Unity</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <SiGit className="text-gray-300 text-2xl" />
              <span>Git</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <SiHtml5 className="text-orange-500 text-2xl" />
              <span>HTML5</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <SiCss3 className="text-blue-500 text-2xl" />
              <span>CSS</span>
            </div>
          </div>
        </section>
        <section className="mt-12 max-w-3xl text-center pt-bottom">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <div className="flex flex-wrap justify-center gap-4">
          <a href="https://www.linkedin.com/in/frans-erhart-195319133/" target="_blank"><div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <SiLinkedin className="text-blue-500 text-2xl" />
              <span>LinkedIn</span>
            </div></a>

            <a href="mailto:franserhart12@gmail.com" target="_blank"><div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <SiMaildotru className="text-blue-500 text-2xl" />
              <span>Mail</span>
            </div></a>
            <a href="/Frans_Erhart_CV.pdf" target="_blank"><div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <FaFile className="text-blue-500 text-2xl" />
              <span>CV</span>
            </div></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}