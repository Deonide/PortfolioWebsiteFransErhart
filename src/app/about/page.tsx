import Navbar from "@/Components/NavBar";
import Image from "next/image";
import AgeDisplay from "@/Components/AgeDisplay";

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center pt-24 px-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          <Image
            className="rounded-full border-4 border-gray-700 shadow-lg"
            src="/img/frans.jpg"
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
            My name is Frans Erhart, a developer currently studying at Grafisch Lyceum Utrecht. I enjoy creating entertaining games and exploring new technologies.
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
        <section className="mt-12 max-w-3xl text-center pt-bottom">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Image src="/img/CSharpLogo.png" alt="C#" width={24} height={24} />
              <span>C#</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Image src="/img/UnityLogo.png" alt="Unity" width={24} height={24} />
              <span>Unity</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Image src="/img/GitIcon.png" alt="Git" width={24} height={24} />
              <span>Git</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Image src="/img/HTML5.png" alt="HTML5" width={24} height={24} />
              <span>HTML5</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Image src="/img/CSS.png" alt="CSS" width={24} height={24} />
              <span>CSS</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}