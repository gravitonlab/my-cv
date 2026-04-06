import "normalize.css";
import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { PdfViewPage } from "page/PdfViewPage";
import { PdfRuViewPage } from "page/PdfRuViewPage";

function App() {
  return (
    <BrowserRouter basename="/my-cv/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv-pdf" element={<PdfViewPage />} />
        <Route path="/cv-pdf-ru" element={<PdfRuViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
