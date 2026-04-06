import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Page } from "components/layout/Page/Page";
import { Button } from "components/layout/Button/Button";
import { baseData, data } from "data";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CvPdfView } from "components/CvPdfView/CvPdfView";
import { useLangContext } from "components/providers/lang/useLangContext";
import { LangEnum } from "models";

const { avatar, contacts } = baseData;

const socials = contacts.filter(({ title }) =>
  ["e-mail", "telegram", "whatsapp", "facebook", "linkedin"].includes(title),
);

export const About = () => {
  const { lang } = useLangContext();

  const { name, positionTitle: position, about } = data[lang];

  const navigate = useNavigate();

  const isEng = lang === LangEnum.En;

  const goToCvPage = () => {
    navigate(isEng ? "/cv-pdf" : "/cv-pdf-ru");
  };

  return (
    <Page className={styles.root} id="about">
      <div className={styles.block_1}>
        <h1>{name}</h1>
        <div className={styles.position}>{position}</div>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className={styles.block_2}>
        <div className={styles.socials}>
          <ul>
            {socials.map(({ href, value, icon }) => (
              <li key={href}>
                {!!href && !!icon && (
                  <a href={href} title={value} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={icon}
                      className={styles.soicalIcon}
                      size="2x"
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.text}>
          <p>{about}</p>
        </div>
        <div className={styles.btnWrapper}>
          <PDFDownloadLink
            document={<CvPdfView lang={lang} />}
            fileName={`CV_${name.replace(" ", "_")}`}
            className={styles.pdfDownloadLink}
          >
            {({ loading }) =>
              loading ? "Loading..." : isEng ? "Download CV" : "Скачать CV"
            }
          </PDFDownloadLink>
          <Button id="open_pdf" onClick={goToCvPage}>
            {isEng ? "Open CV Page" : "Посмотреть CV"}
          </Button>
        </div>
      </div>
    </Page>
  );
};
