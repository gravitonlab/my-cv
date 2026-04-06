import cn from "clsx";
import { Page } from "components/layout/Page/Page";
import { baseData } from "data";
import { capitalize } from "helpers/stringHelper";
import styles from "./Skills.module.scss";
import { SkillTypeEnum } from "models";
import { sectionTitles, skillsTitles } from "locales";
import { useLangContext } from "components/providers/lang/useLangContext";

const { skills } = baseData;

export const Skills = () => {
  const { lang } = useLangContext();
  const titles = sectionTitles[lang];

  return (
    <Page id="skills">
      <h2>{titles.skills}</h2>
      <div className={styles.root}>
        {Object.entries(skills).map(([key, items]) => {
          const skillType = key as SkillTypeEnum;

          return (
            <div key={key} className={cn(styles.skillSection)}>
              <div className={styles.skillSection__title}>
                {capitalize(skillsTitles[lang][skillType])}
              </div>
              <ul className={styles.skillSection__list}>
                {items.map(({ name }) => (
                  <li key={name} className={styles.skillItem}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Page>
  );
};
