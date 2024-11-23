import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./Lab4/store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
    <div id="wd-labs">
      <h1>Labs</h1>

      {/* full name */}
      <h2>Yiqun Cao 01</h2>

      <TOC />

      {/* GitHub link */}
      <div>
        <a
          id="wd-github"
          href="https://github.com/Haibara-69/kanbas-react-web-app-cs5610-fa24/tree/a4"
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
        <Route path="Lab4" element={<Lab4 />} />
        <Route path="Lab5" element={<Lab5 />} />


      </Routes>
    </div>
    </Provider>
  );
}

