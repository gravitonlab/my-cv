import cn from "clsx";
import { Page } from "components/layout/Page/Page";
import { data } from "data";
import styles from "./Experience.module.scss";
import { TagList } from "components/shared/TagList/TagList";
import { useLangContext } from "components/providers/lang/useLangContext";
import { sectionTitles } from "locales";

export const Experience = () => {
  const { lang } = useLangContext();
  const { experience } = data[lang];
  const titles = sectionTitles[lang];

  return (
    <Page id="experience">
      <h2>{titles.experiences}</h2>
      <div className={styles.root}>
        {experience.map(({ company, date, description, position, skills }) => (
          <div key={company} className={cn(styles.item)}>
            <h3>{position}</h3>
            <div className={styles.place}>
              <strong>{company} </strong>
              <span className={styles.date}>({date})</span>
            </div>
            <div className={styles.description}>
              <div className={styles.description__title}>
                {description.title}
              </div>
              <ul className={styles.description__list}>
                {description.list.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
            <TagList className={styles.skills} list={skills} />
          </div>
        ))}
      </div>
    </Page>
  );
};
