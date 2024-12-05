import { render, screen } from "@testing-library/react";
import DangerLabel from "./DangerLabel";
import DefaultLabel from "./DefaultLabel";
import "@testing-library/jest-dom";
import React from 'react';
import {debug} from 'jest-preview'
//import "./styles2.scss";
import fs from "fs";
import path from "path";
import App from "./App";

describe("App", () => {
  it("Is rendered with expected content", () => {
    render(<App />);
    const dangerLabel = screen.queryByText('DangerLabel');
    const defaultLabel = screen.queryByText('DefaultLabel');
    expect(dangerLabel).toBeInTheDocument();
    expect(defaultLabel).toBeInTheDocument();
  });
});

describe("DangerLabel", () => {
  const dangerLabel = <DangerLabel visible>TESTE</DangerLabel>;
  it("Has class -danger", () => {
    const { container } = render(dangerLabel);
    expect(container.firstChild).toHaveClass("-danger");
  });
  it("Has background-color #e74c3c", () => {
    // const style = document.createElement("style");
    // style.innerHTML = `
    //   .-danger {
    //     color: red;
    //     font-weight: bold;
    //   }
    // `;
    // document.head.appendChild(style);

    // const cssPath = path.resolve(__dirname, "styles.css"); // Resolve the file path
    // const cssContent = fs.readFileSync(cssPath, "utf8"); // Read the CSS file content
  
    // // Create a <style> tag and append the CSS content
    // const style = document.createElement("style");
    // style.innerHTML = cssContent;
    // document.head.appendChild(style);

    const { container } = render(dangerLabel);
    debug();
    expect(container.firstElementChild).toHaveStyle(`background-color: #e74c3c`);
  });
});

describe("DefaultLabel", () => {
  const defaultLabel = <DefaultLabel visible>TESTE</DefaultLabel>;
  it("Has default background-color", () => {
    const { container } = render(defaultLabel);
    expect(container.firstElementChild).toHaveStyle(`background-color: ''`);
  });
});