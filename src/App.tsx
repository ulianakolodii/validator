import "./App.css";
import React, { ChangeEvent, useState } from "react";
import UploadButton from "./components/UploadButton/UploadButton.tsx";
import validatePassword from "./utils/validatePassword.ts";
import Info from "./components/Info/Info.tsx";

const App = () => {
  const [validPasswordsCount, setValidPasswordsCount] = useState<number>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = String(e.target?.result);
      const lines = content.split("\n");
      const correctPasswords = lines.reduce((acc, line) => {
        if (validatePassword(line)) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setValidPasswordsCount(correctPasswords);
    };
    reader.readAsText(file);
  };

  return (
    <div className="App">
      <div className="wrap">
        <UploadButton onChange={handleFileChange}>Upload file</UploadButton>
        {validPasswordsCount && (
          <Info>
            valid password: <strong>{validPasswordsCount}</strong>
          </Info>
        )}
      </div>
    </div>
  );
};

export default App;
