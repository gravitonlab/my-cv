import { PDFViewer } from "@react-pdf/renderer";
import { CvPdfView } from "components/CvPdfView/CvPdfView";
import { LangEnum } from "models";

export const PdfRuViewPage = () => {
  return (
    <PDFViewer>
      <CvPdfView lang={LangEnum.Ru} />
    </PDFViewer>
  );
};
