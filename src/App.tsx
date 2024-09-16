import "./App.css";
import React, { ChangeEvent, useState } from "react";
import UploadButton from "./components/UploadButton/UploadButton.tsx";
import Info from "./components/Info/Info.tsx";

const App = () => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      console.log("log file", file);
    };
    reader.readAsText(file);
  };

  return (
    <div className="App">
      <div className="wrap">
        <UploadButton onChange={handleFileChange}>Upload file</UploadButton>
        <Info>
          valid password: <strong>0</strong>
        </Info>
      </div>
    </div>
  );
};

export default App;
