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
          <img src="src/assets/logo.svg" alt="Logo" className="logo" />
        </button>
      </div>
    </>
  );
}
