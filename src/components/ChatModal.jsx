import React, { useEffect } from "react";

export default function ChatModal({ open, onClose, videoId = "vTSbeL0q530" }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white dark:bg-gray-900 w-[95%] md:w-4/5 lg:w-3/4 max-w-6xl rounded-lg overflow-hidden shadow-xl h-[80vh] md:h-[85vh] lg:h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">PQC Explainer</h3>
          <button onClick={onClose} className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-lg">✕</button>
        </div>

        {/* Video */}
        <div className="flex-1 p-4">
          <div className="w-full h-full">
            <iframe
              title="PQC Video"
              src={src}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-right border-t border-gray-200 dark:border-gray-700">
          <button onClick={onClose} className="px-5 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">Close</button>
        </div>
      </div>
    </div>
  );
}
