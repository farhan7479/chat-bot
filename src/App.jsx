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
          <img src="https://imgs.search.brave.com/lsXiraFpiBLGY1F-Isnt9azZ56mpZv3X5ijNKFEMiaE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTI4NzIvMTI4/NzI0MjQucG5n" alt="Logo" className="logo" />
      </button>
      </div>
    </>
  );
}
