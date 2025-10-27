import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

export default function DetailsPage({ title, subtitle, content, bannerImage }) {
  const navigate = useNavigate();
  const whyData = sections.find((section) => section.id === "why");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* ===== Banner Section ===== */}
      <section
        className="relative flex items-center h-[300px] md:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage || "/default-banner.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* ===== Content Section ===== */}
      <section className="max-w-8xl mx-auto px-6 py-16">
        <div className="border-l-4 border-blue-600 pl-6">
          {Array.isArray(content) ? (
            content.map((para, idx) => (
              <p
                key={idx}
                className="mb-6 leading-relaxed text-lg text-gray-700 dark:text-gray-300"
              >
                {para}
              </p>
            ))
          ) : (
            <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
              {content}
            </p>
          )}
        </div>

        {/* ===== Back Button ===== */}
        <div className="mt-12">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}
