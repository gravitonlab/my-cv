import {
  faTelegram,
  // faLinkedin,
  // faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  /*faCity,*/ faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "./images/avatar.png";
import avatarV2 from "./images/avatar_transparent.png";
import portfolio_furniro from "./images/portfolios/furniro.png";
import portfolio_achord from "./images/portfolios/achord.png";
import { ICvBaseData, ICvDataConfig, LangEnum, SkillTypeEnum } from "models";

export const contactsInfo = {
  email: "azad_63_mamedov@mail.ru",
  phone: "+79276951562",
  linkedin: "azad-mamedov",
  // facebook: "azad.mamedov.338",
  telegram: "azad_63_mamedov",
};

const yearsOfExperience = new Date().getFullYear() - 2019;

export const baseData: ICvBaseData = {
  avatar,
  avatarV2,
  contacts: [
    // {
    //   title: "location",
    //   value: `${contactsInfo.city}, ${contactsInfo.region}, ${contactsInfo.country}`,
    //   icon: faCity,
    // },
    {
      title: "phone",
      href: `tel:${contactsInfo.phone.replace(/\s/g, "")}`,
      value: contactsInfo.phone,
      icon: faPhone,
    },
    {
      title: "e-mail",
      href: `mailto:${contactsInfo.email}`,
      value: contactsInfo.email,
      icon: faEnvelope,
    },
    {
      title: "telegram",
      href: `https://t.me/${contactsInfo.telegram}`,
      value: `@${contactsInfo.telegram}`,
      icon: faTelegram,
    },
    // {
    //   title: "whatsapp",
    //   href: `https://wa.me/${contactsInfo.phone.replace("+", "")}`,
    //   value: contactsInfo.phone,
    //   icon: faWhatsapp,
    // },
    // {
    //   title: "linkedin",
    //   href: `https://www.linkedin.com/in/${contactsInfo.linkedin}/`,
    //   value: `https://linkedin.com/in/${contactsInfo.linkedin}/`,
    //   icon: faLinkedin,
    // },
  ],
  skills: {
    [SkillTypeEnum.LangAndTech]: [
      {
        name: "JavaScript",
        progress: "75%",
        start: new Date("01.01.2019"),
      },
      {
        name: "TypeScript",
        progress: "60%",
        start: new Date("01.01.2019"),
      },
      { name: "HTML", progress: "90%", start: new Date("01.01.2019") },
      { name: "CSS", progress: "90%", start: new Date("01.01.2019") },
      { name: "SASS/SCSS", progress: "90%", start: new Date("01.01.2019") },
    ],
    [SkillTypeEnum.Libs]: [
      { name: "ReactJS", progress: "80%", start: new Date("02.01.2020") },
      { name: "Next.js", progress: "40%", start: new Date("03.01.2022") },
      { name: "Vue.js", progress: "20%", start: new Date("04.01.2022") },
    ],
    [SkillTypeEnum.Store]: [
      { name: "RTK", progress: "80%", start: new Date("02.01.2020") },
      { name: "RTK Query", progress: "80%", start: new Date("02.01.2020") },
      {
        name: "Redux Thunk",
        progress: "75%",
        start: new Date("02.01.2020"),
      },
      {
        name: "Redux Saga",
        progress: "55%",
        start: new Date("02.01.2021"),
      },
      { name: "Mobx", progress: "25%", start: new Date("02.01.2021") },
      { name: "Zustand", progress: "25%", start: new Date("02.01.2021") },
    ],
    [SkillTypeEnum.TestAndDocs]: [
      {
        name: "Playwright",
        progress: "60%",
        start: new Date("01.10.2022"),
      },
      { name: "Jest", progress: "30%", start: new Date("01.02.2021") },
      { name: "Vitest", progress: "30%", start: new Date("01.02.2021") },
      { name: "Storybook", progress: "75%", start: new Date("05.01.2021") },
      { name: "Creevey", progress: "70%", start: new Date("01.11.2021") },
    ],
    [SkillTypeEnum.Other]: [
      { name: "Webpack", progress: "60%", start: new Date("01.10.2022") },
      { name: "Vite", progress: "60%", start: new Date("01.10.2022") },
      {
        name: "Styled-components",
        progress: "45%",
        start: new Date("02.01.2021"),
      },
      { name: "Git", progress: "80%", start: new Date("05.01.2019") },
      {
        name: "CI/CD gitlab",
        progress: "40%",
        start: new Date("01.01.2022"),
      },
      {
        name: "npm",
        progress: "40%",
        start: new Date("01.01.2021"),
      },
      {
        name: "Yarn",
        progress: "40%",
        start: new Date("01.01.2023"),
      },
    ],
  },
  langs: [
    {
      language: "english",
      level: "B1",
      description: "intermediate, conversational, competent",
    },
    {
      language: "russian",
      level: "native speaker",
      description: "intermediate, conversational, competent",
    },
  ],
};

export const data: ICvDataConfig = {
  [LangEnum.En]: {
    name: "Azad MAMEDOV",
    positionTitle: "Senior Frontend Developer",
    location: {
      post: "",
      city: "Yekaterinburg",
      region: "Sverdlovsk Oblast",
      country: "Russia",
    },
    shortAbout:
      `Hi! I'am a frontend developer with over ${yearsOfExperience} years of experience. ` +
      "Seeking an opportunity to work in a challenging environment to " +
      "prove my skills and utilize my knowledge & intelligence in the " +
      "growth of the organization.",
    about:
      `I have more than ${yearsOfExperience} years of experience in web development and I really like to work with customers and provide high\u2011quality service and quick responses. ` +
      "I like to discover new technologies, search out for effective decisions, and grow as a professional. " +
      "Working with a variety of technologies and tools helps me to use proven best practices for existing challenges, predict application behavior and prevent bugs and incidents. " +
      "Contact me if you want to work with a reliable and experienced developer. " +
      "Lets get the job done!",
    education: [
      {
        degree: "Bachelor Of Engineering",
        fieldTitle: "Aircraft engines and power plants",
        establishment: "Samara State Aerospace University",
        date: "09/2008 - 07/2012",
        location: "Samara, Russia",
        description: "",
      },
      {
        degree: "Master Of Engineering",
        fieldTitle: "Aircraft Engine",
        establishment: "Samara State Aerospace University",
        date: "09/2011 - 07/2014",
        location: "Samara, Russia",
        description: "",
      },
    ],
    courses: [
      {
        degree: "",
        establishment: "EPAM courses",
        date: "",
        location: "",
        description: {
          title: "The main topics covered in the course:",
          list: [
            "JS Core",
            "JS Asynchronous / Event Loop",
            "Callback, HOC",
            "Closure",
            "Proto / Prototype",
            "Classes",
          ],
        },
      },
      {
        degree: "",
        establishment: "frontendmasters.com",
        date: "",
        location: "",
        description: {
          title: "",
          list: [
            "JavaScript: The Hard Parts",
            "Deep JavaScript Foundations",
            "Web Performance Fundamentals",
            "Full Stack for Front-End Engineers",
          ],
        },
      },
    ],
    experience: [
      {
        position: "Senior Frontend developer",
        company: "SKB Kontur (Auto)",
        date: "01/2023 - Present",
        location: "remote",
        description: {
          title: "During the Auto project, I achieved the following results:",
          list: [
            "Developed a WebSocket-based notifications system, enhancing real-time communication, ensuring users receive instant updates, resulting in a 31% increase in user engagement.",
            "Created a customizable report builder component, enabling users to tailor the format and content of their reports, which improved report generation efficiency by 27%.",
            "Implemented adaptive design, ensuring a seamless user experience across various devices and screen sizes.",
            "Developed a drag-and-drop component for image handling and PDF creation, simplifying the process for users to manage and compile documents.",
            "Wrote Playwright tests for key service scenarios, ensuring the reliability and stability of critical features, reducing bug incidence by ~ 20%.",
          ],
        },
        skills: [
          "ReactJS",
          "TypeScript",
          "JavaScript",
          "webpack",
          "vite",
          "SASS/SCSS",
          "Redux Tool Kit",
          "RTK Query",
          "Redux Saga",
          "gitlab ci/cd",
          "Storybook",
          "Playwright",
          "Jest",
          "Yarn",
          "figma",
          "YouTrack",
        ],
      },
      {
        position: "Frontend developer",
        company: "SKB Kontur (Docsi)",
        date: "03/2021 - 12/2022",
        location: "remote",
        description: {
          title: "I accomplished the following results on the Docsi project:",
          list: [
            "Developed document handling features for tax authorities, including batch processing and multi-page PDF support, increasing document processing speed by ~ 40%.",
            "Implemented a system for searching, filtering, and sorting documents, with advanced parameter search capabilities.",
            "Enhanced packaging and shipment processes with new methods and controllers, which significantly reduced processing time.",
            "Conducted extensive refactoring and optimization, updating Storybook components and screenshots.",
            "Implemented unit and automated tests for all critical service functionalities.",
          ],
        },
        skills: [
          "ReactJS",
          "TypeScript",
          "JavaScript",
          "webpack",
          "SASS/SCSS",
          "Redux Tool Kit",
          "Redux Thunk",
          "gitlab ci/cd",
          "Storybook",
          "Jest",
          "Creevey",
          "figma",
          "YouTrack",
        ],
      },
      {
        position: "Web Developer",
        company: "Plusmedia",
        date: "01/2019 - 02/2021",
        location: "Samara, Russia",
        description: {
          title:
            "I focused on website development and optimization, contributing significantly to the company's digital growth.",
          list: [
            "Design and develop visually appealing, user-friendly websites using HTML, CSS, and JavaScript.",
            "Optimize website speed and performance through techniques like image compression and code minification.",
            "Manage website deployment and migration across different environments.",
            "Configure servers with Nginx and Apache for optimal hosting performance.",
          ],
        },
        skills: [
          "HTML5",
          "CSS3",
          "Jquery",
          "php",
          "mysql",
          "git",
          "photoshop",
          "figma",
        ],
      },
    ],
    portfolios: [
      {
        name: "Achord",
        demoLink: "https://achord.ru/",
        image: portfolio_achord,
        description:
          "Achord is a comprehensive resource for piano sheet music, " +
          "organized by genre and alphabetically. Users can easily search " +
          "for sheet music by title or author, making it an ideal destination " +
          "for pianists of all levels",
        repoLink: "https://github.com/azad-source/achord.ru",
        stackList: [
          "ReactJs",
          "Typescript",
          "Webpack",
          "RTK Query",
          "SASS",
          "Axios",
        ],
      },
      {
        name: "Furniro",
        demoLink: "https://azad-source.github.io/furniro/",
        image: portfolio_furniro,
        description:
          "Furniro is an online store where you can order furniture, explore " +
          "interior designs, and choose your preferred style. " +
          "It offers a seamless shopping experience with a wide " +
          "range of options to fit any aesthetic.",
        repoLink: "https://github.com/azad-source/furniro",
        stackList: [
          "ReactJs",
          "Typescript",
          "Vite",
          "Zustand",
          "Styled-components",
        ],
      },
    ],
  },
  [LangEnum.Ru]: {
    name: "Мамедов Азад Чингиз оглы",
    positionTitle: "Ведущий Frontend-разработчик",
    location: {
      post: "",
      city: "Екатеринбург",
      region: "Свердловская область",
      country: "Россия",
    },
    shortAbout:
      `Привет! Я frontend-разработчик с опытом более ${yearsOfExperience} лет. ` +
      "Ищу возможность работать в сложной среде, чтобы применить свои навыки и знания " +
      "для развития компании и профессионального роста.",
    about:
      `У меня более ${yearsOfExperience} лет опыта в веб-разработке. Мне нравится работать с клиентами, ` +
      "обеспечивая высокое качество сервиса и оперативные ответы. " +
      "Я люблю изучать новые технологии, находить эффективные решения и расти как профессионал. " +
      "Работа с разнообразными инструментами помогает мне применять проверенные практики, " +
      "предсказывать поведение приложения и предотвращать ошибки. " +
      "Свяжитесь со мной, если вам нужен надёжный и опытный разработчик. " +
      "Давайте сделаем это!",
    education: [
      {
        degree: "Бакалавр",
        fieldTitle: "Авиационные двигатели и энергетические установки",
        establishment: "Самарский Государственный Аэрокосмический Университет",
        date: "09/2008 - 07/2012",
        location: "Самара, Россия",
        description: "",
      },
      {
        degree: "Магистр",
        fieldTitle: "Авиационные двигатели",
        establishment: "Самарский Государственный Аэрокосмический Университет",
        date: "09/2011 - 07/2014",
        location: "Самара, Россия",
        description: "",
      },
    ],
    courses: [
      {
        degree: "",
        establishment: "Курсы EPAM",
        date: "",
        location: "онлайн",
        description: {
          title: "Основные темы курса:",
          list: [
            "JS Core",
            "Асинхронность / Event Loop",
            "Callback, HOC",
            "Замыкания",
            "Proto / Prototype",
            "Классы",
          ],
        },
      },
      {
        degree: "",
        establishment: "Крэш-курсы Контур (буткамп)",
        date: "",
        location: "г. Екатеринбург (компания СКБ Контур)",
        description: {
          title: "Основные темы курса:",
          list: [
            "Чистый код",
            "Компьютерная безопасность",
            "React",
            "Модульное тестирование",
            "Продвинутый Typescript",
          ],
        },
      },
      {
        degree: "",
        establishment: "frontendmasters.com",
        date: "",
        location: "онлайн",
        description: {
          title: "",
          list: [
            "JavaScript: The Hard Parts",
            "Deep JavaScript Foundations",
            "Web Performance Fundamentals",
            "Full Stack for Front-End Engineers",
          ],
        },
      },
    ],
    experience: [
      {
        position: "Ведущий Frontend-разработчик",
        company: "СКБ Контур (Auto)",
        date: "01/2023 - н.в.",
        location: "удалённо",
        description: {
          title: "Достижения в проекте Auto:",
          list: [
            "Разработал систему уведомлений на WebSocket, что улучшило реальное время общения и повысило вовлечённость пользователей на 31%.",
            "Создал настраиваемый конструктор отчётов, позволивший пользователям гибко форматировать данные, что увеличило эффективность генерации отчётов на 27%.",
            "Реализовал адаптивный дизайн для корректного отображения на любых устройствах и размерах экранов.",
            "Разработал drag-and-drop компонент для работы с изображениями и создания PDF, упростив процесс управления документами.",
            "Написал тесты на Playwright для ключевых сценариев, что снизило количество багов в критическом функционале на ~20%.",
          ],
        },
        skills: [
          "ReactJS",
          "TypeScript",
          "JavaScript",
          "webpack",
          "vite",
          "SASS/SCSS",
          "Redux Tool Kit",
          "RTK Query",
          "Redux Saga",
          "gitlab ci/cd",
          "Storybook",
          "Playwright",
          "Jest",
          "Yarn",
          "figma",
          "YouTrack",
        ],
      },
      {
        position: "Frontend-разработчик",
        company: "СКБ Контур (Docsi)",
        date: "03/2021 - 12/2022",
        location: "удалённо",
        description: {
          title: "Достижения в проекте Docsi:",
          list: [
            "Разработал функции обработки документов для налоговых органов, включая пакетную обработку и поддержку многостраничных PDF, что ускорило обработку на ~40%.",
            "Реализовал систему поиска, фильтрации и сортировки документов с поддержкой расширенных параметров.",
            "Улучшил процессы упаковки и отгрузки новыми методами и контроллерами, сократив время обработки.",
            "Провёл масштабный рефакторинг и оптимизацию, обновил компоненты и скриншоты в Storybook.",
            "Внедрил юнит- и автотесты для всего критического функционала сервиса.",
          ],
        },
        skills: [
          "ReactJS",
          "TypeScript",
          "JavaScript",
          "webpack",
          "SASS/SCSS",
          "Redux Tool Kit",
          "Redux Thunk",
          "gitlab ci/cd",
          "Storybook",
          "Jest",
          "Creevey",
          "figma",
          "YouTrack",
        ],
      },
      {
        position: "Веб-разработчик",
        company: "Plusmedia",
        date: "01/2019 - 02/2021",
        location: "Самара, Россия",
        description: {
          title:
            "Фокус на разработке и оптимизации сайтов, вклад в цифровой рост компании:",
          list: [
            "Проектирование и разработка визуально привлекательных и удобных сайтов на HTML, CSS и JavaScript.",
            "Оптимизация скорости и производительности сайтов: сжатие изображений, минификация кода.",
            "Управление деплоем и миграцией сайтов между окружениями.",
            "Настройка серверов Nginx и Apache для оптимальной производительности хостинга.",
          ],
        },
        skills: [
          "HTML5",
          "CSS3",
          "Jquery",
          "php",
          "mysql",
          "git",
          "photoshop",
          "figma",
        ],
      },
    ],
    portfolios: [
      {
        name: "Achord",
        demoLink: "https://achord.ru/",
        image: portfolio_achord,
        description:
          "Achord — это комплексный ресурс с нотами для фортепиано, " +
          "организованными по жанрам и в алфавитном порядке. Пользователи могут легко искать " +
          "ноты по названию или автору, что делает его идеальным местом " +
          "для пианистов любого уровня",
        repoLink: "https://github.com/azad-source/achord.ru",
        stackList: [
          "ReactJs",
          "Typescript",
          "Webpack",
          "RTK Query",
          "SASS",
          "Axios",
        ],
      },
      {
        name: "Furniro",
        demoLink: "https://azad-source.github.io/furniro/",
        image: portfolio_furniro,
        description:
          "Furniro — интернет-магазин мебели, где можно заказать мебель, изучить " +
          "дизайны интерьеров и выбрать предпочтительный стиль. " +
          "Платформа предлагает удобный шоппинг с широким " +
          "выбором вариантов под любую эстетику.",
        repoLink: "https://github.com/azad-source/furniro",
        stackList: [
          "ReactJs",
          "Typescript",
          "Vite",
          "Zustand",
          "Styled-components",
        ],
      },
    ],
  },
};
