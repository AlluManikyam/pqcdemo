import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpeg";

export default function WhyPQC({sec}) {
  return (
    <section
      id="why"
      title="Why PQC"
      className="relative w-full h-85-vh bg-gray-900"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 

      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-6xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
        {sec.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-xl">
        {sec.summary}
        </p>
        <Link
          to= {sec.buttonLink}
          className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          {sec.buttonText}
        </Link>
      </div>
    </section>
  );
}
