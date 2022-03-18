import React, { useState } from "react";
import "./App.css";

import useCookie from "./useCookie";

export default function App() {
  const [cookie, updateCookie] = useCookie("username", "BrandonBaars");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{cookie}</h1>
      <button
        onClick={() => {
          updateCookie("updatedUsername", 10);
        }}
      >
        Store Cookie
      </button>
    </div>
  );
}
