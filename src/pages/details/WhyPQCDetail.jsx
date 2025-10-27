import React from "react";
import { Link } from "react-router-dom";

export default function WhyPQCDetail() {
  return (
    <div className="px-6 md:px-12 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">Why PQC</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Post-Quantum Cryptography (PQC) prepares organizations for the era of quantum computing.
        It ensures cryptographic systems remain secure against quantum attacks.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Detailed content includes:
        <ul className="list-disc ml-6 mt-2">
          <li>Algorithm impact</li>
          <li>Quantum risk assessment</li>
          <li>Industry examples</li>
          <li>Adoption strategies</li>
        </ul>
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
