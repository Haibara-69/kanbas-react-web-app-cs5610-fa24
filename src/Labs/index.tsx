import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>

      {/* full name */}
      <h2>Yiqun Cao 01</h2>

      <TOC />

      {/* GitHub link */}
      <div>
        <a
          id="wd-github"
          href="https://github.com/Haibara-69/kanbas-react-web-app-cs5610-fa24/tree/a3"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />

      </Routes>
    </div>
);}
export {};
