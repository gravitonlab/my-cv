import cn from "clsx";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize } from "helpers/stringHelper";
import { baseData, data } from "data";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { useLangContext } from "components/providers/lang/useLangContext";
import Toggle from "../Toggle/Toggle";
import { LangEnum } from "models";
import { SectionKeyType, sectionTitles } from "locales";

const MENU: SectionKeyType[] = [
  "about",
  "experiences",
  "education",
  "portfolios",
  "skills",
  "languages",
  "contacts",
];

function scrollToTargetAdjusted(element: Element | null) {
  if (element) {
    const headerOffset = 85;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

const { avatar } = baseData;

interface IProps {
  onSwitchLang: () => void;
}

export const Header: React.FC<IProps> = ({ onSwitchLang }) => {
  const { lang } = useLangContext();
  const { name } = data[lang];

  const titles = sectionTitles[lang];

  const defaultStyle = { transform: "translateX(-105%)" };
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [styleMenu, setStyleMenu] = useState(defaultStyle);

  const showMenu = () => {
    setStyleMenu({ transform: "translateX(0)" });
    setShowMobileMenu(true);
  };
  const closeMenu = () => {
    setStyleMenu(defaultStyle);
    setShowMobileMenu(false);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    scrollToTargetAdjusted(document.querySelector(e.currentTarget.hash));
  };

  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const menuList = (
    <ul>
      {MENU.map((item) => {
        const title = titles?.[item] || item;

        const itemName = capitalize(title);
        return (
          <li key={item}>
            <a href={`#${item}`} title={itemName} onClick={handleScrollTo}>
              {itemName}
            </a>
          </li>
        );
      })}
      <div style={{ width: 120, display: "flex", justifyContent: "center" }}>
        <Toggle
          checked={lang === LangEnum.En}
          label={lang}
          labelPosition="right"
          onChange={onSwitchLang}
        />
      </div>
    </ul>
  );

  return (
    <header className={styles.root}>
      <nav className={styles.menu}>{menuList}</nav>

      <button className={styles.burgerMenuBtn} onClick={showMenu} type="button">
        <FontAwesomeIcon icon={faBars} className={styles.burgerMenuIcon} />
      </button>

      <div
        className={cn(showMobileMenu && styles.overlay)}
        onClick={closeMenu}
      />

      <nav className={cn(styles.menu, styles.menu_mobile)} style={styleMenu}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" className={styles.avatar__img} />
          <span className={styles.avatar__name}>{name}</span>
        </div>
        <button
          onClick={closeMenu}
          className={styles.burgerMenuClose}
          type="button"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {menuList}
      </nav>
    </header>
  );
};
