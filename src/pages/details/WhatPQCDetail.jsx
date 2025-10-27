import React from "react";
import { Link } from "react-router-dom";

export default function WhatPQCDetail() {
  return (
    <div className="px-6 md:px-12 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">What is PQC KM</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        PQC Knowledge Management (PQC KM) enables organizations to track, document, and implement PQC solutions efficiently.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        More details: workflow examples, collaboration practices, and KM tools used in PQC projects.
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
