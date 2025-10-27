import { Link } from "react-router-dom";

export default function MigrationDetail() {
  return (
    <div className="px-6 md:px-12 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">PQC Migration KM</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        PQC Migration KM provides a roadmap to transition legacy systems to quantum-safe cryptography.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Detailed information includes algorithm assessment, inventory mapping, compliance checks, migration plan, testing, and monitoring.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
