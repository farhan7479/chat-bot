import React, { useState } from "react";
import Chatbot from "./Chatbot";
import "./assets/logo.jpg"; // Ensure this import is correct
import "./Chatbutton.css";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="chatbot">
        {open && <Chatbot />}
        <button
          className="chat-button-container button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src="https://imgs.search.brave.com/3eU9zAsgrUY5aD-30LIPFHLu9SkDfRyu6umTO12r2Ks/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE5NTUwMDEucG5n" alt="Logo" className="logo" />
        </button>
      </div>
    </>
  );
}
