import { Link } from "react-router-dom";
import heroImage from "../../assets/nist.jpg";
import { sections } from "../../constants/data";

export default function NISTDetail() {
  const nistData = sections.find((section) => section.id === "nist");

  const { resources } = nistData;

  return (
    <>
      <section
        className="relative flex items-center h-[300px] md:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            {nistData.title}
          </h1>
          {nistData.subtitle && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {nistData.subtitle}
            </p>
          )}
        </div>
      </section>
      <div className="px-6 md:px-12 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {nistData.content.paragraphs.map((para, idx) => (
          <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4">
            {para}
          </p>
        ))}
        <ul className="list-disc ml-6 space-y-2 mb-6">
          {resources.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 hover:underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
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
