import { Page } from "components/layout/Page/Page";
import { baseData, data } from "data";
import { capitalize } from "helpers/stringHelper";
import styles from "./Contacts.module.scss";
import { sectionTitles } from "locales";
import { getFullAddress } from "helpers/address.helpers";
import { useLangContext } from "components/providers/lang/useLangContext";

const { contacts, avatar } = baseData;

export const Contacts = () => {
  const { lang } = useLangContext();
  const { location } = data[lang];
  const titles = sectionTitles[lang];

  return (
    <Page id="contacts">
      <h2>{titles.contacts}</h2>
      <div className={styles.root}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <span className={styles.item__name}>
              {capitalize(sectionTitles[lang].location)}:{" "}
            </span>
            <span className={styles.item__value}>
              {getFullAddress(location)}
            </span>
          </li>
          {contacts.map(({ title, value, href }) => (
            <li key={title} className={styles.item}>
              <span className={styles.item__name}>{capitalize(title)}: </span>
              {href ? (
                <a
                  className={styles.item__value}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {value}
                </a>
              ) : (
                <span className={styles.item__value}>{value}</span>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </Page>
  );
};
