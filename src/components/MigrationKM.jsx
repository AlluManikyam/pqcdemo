import { Link } from "react-router-dom";
import pqcImage from "../assets/migration.jpg";

export default function MigrationKM({sec}) {

  const v = localStorage.getItem("pqc-dark");
  const titleColor = v === null ? "text-gray-900" : "text-white-900";
  const summaryColor = v === null ? "text-gray-600" : "text-white-600";

  return (
    <section id={sec.id} className="max-w-7xl mx-auto px-6 my-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            style={{ height: 450 }}
            src={pqcImage}
            alt="Team working together"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div>
          <h2 className={`text-3xl font-bold ${titleColor} mb-4`}>
            {sec.title}
          </h2>
          <p className={`${summaryColor} mb-6`}>{sec.summary}</p>
          <Link
            to= {sec.buttonLink}
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
           {sec.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
