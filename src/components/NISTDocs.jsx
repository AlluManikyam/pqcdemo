import { Link } from "react-router-dom";
import pqcImage from "../assets/pqc-team.jpg";

export default function NISTDocs({sec}) {
  const v = localStorage.getItem("pqc-dark")
  const titleColor = v === null ?"text-gray-900":"text-white-900"
  const summaryColor = v === null ?"text-gray-600":"text-white-600"

  return (
    <section id={sec.id} className="max-w-7xl mx-auto px-6 my-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text */}
        <div>
          <h2 className={`text-3xl font-bold ${titleColor} mb-4`}>
            {sec.title}
          </h2>
          <p className={`${summaryColor} mb-6`}>{sec.summary}</p>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
          {sec.docs.map((doc, idx) => (
            <a
              key={idx}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-700 text-blue-700 dark:text-blue-300 font-semibold px-6 py-3 rounded-md shadow transition"
            >
              {doc.name}
            </a>
          ))}
        </div>
          <Link
            to={sec.buttonLink}
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            {sec.buttonText}
          </Link>
        </div>

        {/* Right Column - Image */}
        <div>
          <img
            src={pqcImage}
            alt="Team working together"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
