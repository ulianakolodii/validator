import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import validatePassword from "./utils/validatePassword";

jest.mock("./utils/validatePassword", () => jest.fn());

describe("App Component", () => {
  it("should display valid password count after file is uploaded", async () => {
    const mockFileContent = "a 1-5: jwjehrjkqa\nb 2-4: bbbbdjjdsld\nz 3-6: hjjiuyik";
    const mockFile = new File([mockFileContent], "test.txt", { type: "text/plain" });

    validatePassword.mockImplementation(() => true);

    render(<App />);

    const fileInput = screen.getByTestId("upload-input")

    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    await waitFor(() => {
      expect(screen.getByTestId('info-container').innerHTML).toBe('valid password: <strong>3</strong>');
    });
  });
});

