import Card from "@/Components/Card";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-10">
      <div>
        <h1 className="name BrownColor">
          Frans Erhart
        </h1>
        <h2 className="description LightColor">
          Netherlands based game developer
        </h2>
      </div>      <div className="cardsContainer">
            <Card title="About" description="All the necessary info about me, you can find here." img="/Img/frans.jpg" hreftitle="About Me" href="/about" />
            <Card title="Projects" description="You can find some of my best work on this page." img="/Img/ProjectPage.png" hreftitle="Projects" href="/projects"/>
           {/* <Card title="Contact" description="Wanna reach me? Find my contact info here!" img="/Img/contact2.jpg" hreftitle="Contact" href="/contact"/> */}
      </div>
    </main>
  );
}
