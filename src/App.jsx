import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatModal from "./components/ChatModal";
import { FaQuestionCircle } from "react-icons/fa";

// Main sections summary
import Home from "./pages/Home";

// Detail pages
import WhyPQCDetail from "./pages/details/WhyPQCDetail";
import WhatPQCDetail from "./pages/details/WhatPQCDetail";
import MigrationDetail from "./pages/details/MigrationDetail";
import NISTDetail from "./pages/details/NISTDetail";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Router>
      <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
             <Home/>
            }
          />

          {/* Detail routes */}
          <Route path="/why" element={<WhyPQCDetail />} />
          <Route path="/what" element={<WhatPQCDetail />} />
          <Route path="/migration" element={<MigrationDetail />} />
          <Route path="/nist" element={<NISTDetail />} />
        </Routes>

        <Footer />

        {/* Chat Button */}
        <button
          onClick={() => setChatOpen(true)}
          aria-label="Open chat/video"
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700"
        >
          <div
            style={{ display: "inline-block", cursor: "pointer" }}
            title="Need Help?"
          >
            <FaQuestionCircle size={24} />
          </div>
        </button>
        <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
