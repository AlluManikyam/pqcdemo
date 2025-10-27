import { Link } from "react-router-dom";
import { sections } from "../../constants/data";

export default function MigrationDetail() {
  const migrationData = sections.find((section) => section.id === "migration");

  return (
    <div className="px-6 md:px-12 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">
        {migrationData.title}
      </h1>
      {whyData.content.paragraphs.map((para, idx) => (
        <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4">
          {para}
        </p>
      ))}
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
