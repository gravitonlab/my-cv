import { Page } from "components/layout/Page/Page";
import { baseData } from "data";
import { capitalize } from "helpers/stringHelper";
import styles from "./Languages.module.scss";
import { useLangContext } from "components/providers/lang/useLangContext";
import { sectionTitles } from "locales";

const { langs } = baseData;

export const Languages = () => {
  const { lang } = useLangContext();
  const titles = sectionTitles[lang];

  return (
    <Page id="languages">
      <h2>{titles.languages}</h2>
      <ul className={styles.list}>
        {langs.map(({ language, level, description }) => (
          <li key={language} className={styles.item}>
            <span className={styles.item__name}>{capitalize(language)}:</span>
            <span className={styles.item__value}>
              {level} {description}
            </span>
          </li>
        ))}
      </ul>
    </Page>
  );
};
