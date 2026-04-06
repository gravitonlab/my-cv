import { Page } from "components/layout/Page/Page";
import { data } from "data";
import styles from "./Portfolios.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { TagList } from "components/shared/TagList/TagList";
import { useLangContext } from "components/providers/lang/useLangContext";
import { sectionTitles } from "locales";

export const Portfolios = () => {
  const { lang } = useLangContext();
  const { portfolios } = data[lang];
  const titles = sectionTitles[lang];

  return (
    <Page id="portfolios">
      <h2>{titles.portfolios}</h2>
      <div className={styles.root}>
        {portfolios.map((i) => (
          <div key={i.name} className={styles.item}>
            <div className={styles.item__title} />
            <div className={styles.item__content}>
              <div className={styles.image}>
                <Zoom>
                  <img src={i.image} alt={i.name} />
                </Zoom>
              </div>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoItem__caption}>Project:</div>
                  <div className={styles.infoItem__value}>{i.name}</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoItem__caption}>Demo:</div>
                  <a
                    href={i.demoLink}
                    target="_blank"
                    className={styles.infoItem__value}
                  >
                    {i.demoLink}
                  </a>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoItem__caption}>Repo:</div>
                  <a
                    href={i.repoLink}
                    target="_blank"
                    className={styles.infoItem__value}
                  >
                    {i.repoLink}
                  </a>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoItem__value}>{i.description}</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoItem__value}>
                    <TagList list={i.stackList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};
