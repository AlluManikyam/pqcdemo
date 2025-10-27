import { Link } from "react-router-dom";
import heroImage from "../../assets/why.jpeg";
import { sections } from "../../constants/data";

export default function WhyPQCDetail() {
  const whyData = sections.find((section) => section.id === "why");
  return (
    <>
      <section
        className="relative flex items-center h-[300px] md:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage || "/default-banner.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            {whyData.title}
          </h1>
          {whyData.subtitle && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {whyData.subtitle}
            </p>
          )}
        </div>
      </section>
      <div className="px-6 md:px-12 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {whyData.content.paragraphs.map((para, idx) => (
          <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4">
            {para}
          </p>
        ))}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <ul className="list-disc ml-6 mt-2">
            {whyData.content.list.map((data) => {
              return <li>{data}</li>;
            })}
          </ul>
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
