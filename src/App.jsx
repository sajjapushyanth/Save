import React, { useState } from "react";
import SegmentPopup from "./components/SegmentPopup";
import "./App.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app">
      <button className="btn save" onClick={() => setShowPopup(true)}>
        Save segment
      </button>

      {showPopup && <SegmentPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
