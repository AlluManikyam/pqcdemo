import { Link } from "react-router-dom";

const nistLinks = [
  { name: "NIST PQC Project Overview", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" },
  { name: "NIST PQC Standards Overview", url: "https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8413.pdf" },
  { name: "NIST PQC Round 3 Submissions", url: "https://csrc.nist.gov/Projects/post-quantum-cryptography/round-3-submissions" },
  { name: "NIST PQC Status", url: "https://csrc.nist.gov/Projects/post-quantum-cryptography/status" },
  { name: "NIST PQC FAQ", url: "https://csrc.nist.gov/projects/post-quantum-cryptography/faq" }
];

export default function NISTDetail() {
  return (
    <div className="px-6 md:px-12 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">NIST Reference Documents</h1>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        {nistLinks.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 hover:underline">
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
  );
}
