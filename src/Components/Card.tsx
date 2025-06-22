import Link from "next/link";

export default function Card({ 
  title, 
  description, 
  img, 
  hreftitle, 
  href 
}: { 
  title: string; 
  description: string; 
  img: string; 
  hreftitle: string; 
  href: string; 
}) {
  return (
    <Link href={href} className="group">
      <div 
        className="relative shadow-lg rounded-2xl p-5 border border-gray-200 cardSize 
                   transition-transform transform hover:scale-105 hover:shadow-xl 
                   bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-white bg-opacity-10 p-4 rounded-xl">
          <h2 className="text-xl font-semibold BrownColor">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}

