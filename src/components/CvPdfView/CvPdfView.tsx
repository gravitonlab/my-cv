import {
  Page,
  Text,
  View,
  Link,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { baseData, data } from "data";
import RobotoRegular from "fonts/roboto/Roboto-Regular.ttf";
import RobotoBold from "fonts/roboto/Roboto-Bold.ttf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LangEnum, SkillTypeEnum } from "models";
import { sectionTitles, skillsTitles } from "../../locales";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { getFullAddress } from "helpers/address.helpers";

const { contacts, langs, skills } = baseData;

const socials = contacts.filter(({ title }) =>
  ["e-mail", "linkedin", "phone"].includes(title),
);

Font.register({ family: "Roboto-Regular", src: RobotoRegular });
Font.register({ family: "Roboto-Bold", src: RobotoBold });

const ColorScheme = {
  mainColor: "#15ABAB",
};

const colors = {
  mainBgColor: "transparent",
  headBgColor: "#fff",
  headTextColor: "#000",
  mainTextColor: "rgba(0, 0, 0, 0.8)",
  secondaryTextColor: "rgba(0, 0, 0, 0.6)",
  thirdTextColor: "rgba(0, 0, 0, 0.4)",
  sectionTextColor: "rgba(101, 76, 79, 0.9)",
  sectionTitleColor: ColorScheme.mainColor,
  borderColor: ColorScheme.mainColor,
  linkColor: "rgba(30, 70, 130, 0.9)",
};

const sizes = {
  totalWidth: 550,
  pagePaddingX: 15,
  pagePaddingY: 20,
  leftContentWidth: 340,
  avatarSize: 80,
  contentSectionGap: 10,
};

const font = {
  head1: 26,
  head2: 14,
  head3: 12,
  head4: 9,
  mainText: 9,
  secondaryText: 9,
};

const lineHeight = {
  mainText: 1.3,
  secondaryText: 1.2,
};

const styles = StyleSheet.create({
  document: { height: "100vh" },
  page: {
    fontFamily: "Roboto-Regular",
    color: colors.mainTextColor,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: `${sizes.pagePaddingY} ${sizes.pagePaddingX} 0`,
    backgroundColor: colors.headBgColor,
    boxSizing: "border-box",
  },
  headInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  headName: {
    fontSize: font.head2,
    fontFamily: "Roboto-Bold",
    lineHeight: 1,
    color: colors.headTextColor,
    textTransform: "uppercase",
  },
  headPosition: {
    fontSize: font.head3,
    color: colors.headTextColor,
  },
  headContacts: {
    width: 550,
    fontSize: font.head4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    rowGap: 6,
    columnGap: 20,
    color: colors.headTextColor,
  },
  headContactsItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    // width: "calc(50% - 5px/2)",
    // alignItems: "center",
    // color: colors.headTextColor,
  },
  headContactsItemLink: {
    color: colors.headTextColor,
  },
  headAvatar: {
    minWidth: sizes.avatarSize,
    height: sizes.avatarSize,
    borderBottom: `3px solid #fff`,
    overflow: "hidden",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  },
  headAvatarImage: {
    display: "flex",
    boxSizing: "border-box",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: sizes.contentSectionGap,
    padding: `10px ${sizes.pagePaddingX} ${sizes.pagePaddingY}`,
    lineHeight: lineHeight.mainText,
  },
  contentHorizontal: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
  },
  aboutText: {
    fontSize: font.mainText,
  },
  contentLeft: {
    minWidth: sizes.leftContentWidth,
    width: sizes.leftContentWidth,
    display: "flex",
    flexDirection: "column",
    gap: sizes.contentSectionGap,
  },
  contentRight: {
    display: "flex",
    flexDirection: "column",
    gap: sizes.contentSectionGap,
    flexGrow: 1,
    overflow: "hidden",
  },
  contentSection: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  contentSectionTitle: {
    fontSize: font.head4,
    fontFamily: "Roboto-Bold",
    textTransform: "uppercase",
    padding: "2px 0",
    borderBottom: `2px solid ${colors.borderColor}`,
    color: colors.sectionTitleColor,
  },
  contentSectionList: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  listItemTitle: {
    fontSize: font.mainText,
    fontFamily: "Roboto-Bold",
    color: colors.mainTextColor,
    marginBottom: 4,
  },
  listItemFieldTitle: {
    fontSize: font.mainText,
    wordBreak: "break-word",
    overflowWrap: "break-word",
    flexShrink: 1,
    minWidth: 0,
    maxWidth: sizes.totalWidth - sizes.leftContentWidth,
  },
  listItemPlace: {
    fontSize: font.mainText,
    color: colors.secondaryTextColor,
    maxWidth: sizes.totalWidth - sizes.leftContentWidth,
  },
  listItemDateLocation: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    color: colors.thirdTextColor,
    fontSize: font.mainText,
  },
  date: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  listItemDescription: {
    fontSize: font.secondaryText,
    lineHeight: lineHeight.mainText,
  },
  descriptionTitle: {
    display: "flex",
  },
  descriptionList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  descriptionListItem: { paddingLeft: 5 },
  contentSubSection: {
    display: "flex",
    flexDirection: "row",
    lineHeight: 0.5,
    gap: "10px",
  },
  contentSubSectionTitle: {
    fontSize: font.mainText,
    color: colors.secondaryTextColor,
  },
  contentSubSectionList: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
    fontSize: font.secondaryText,
  },
  contentSubSectionListItem: {
    fontSize: font.secondaryText,
    lineHeight: lineHeight.secondaryText,
  },
  skills: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "8px",
  },
  skillsListItem: {
    display: "flex",
    border: "none",
    width: "auto",
    lineHeight: 0.5,
  },
  languagesList: {
    gap: 0,
  },
});

interface IProps {
  lang?: LangEnum;
}

export const CvPdfView: React.FC<IProps> = ({ lang = LangEnum.En }) => {
  const titles = sectionTitles[lang];

  const {
    name,
    location,
    shortAbout,
    positionTitle,
    education,
    courses,
    experience,
  } = data[lang];

  const filteredExperience = experience.filter(
    (i) => !i.company.includes("SMARTEC"),
  );

  return (
    <Document style={styles.document} pageMode="fullScreen" title="CV">
      <Page size="A4" style={styles.page}>
        <View style={styles.head}>
          <View style={styles.headInfo}>
            <Text style={styles.headName}>{name}</Text>
            <Text style={styles.headPosition}>{positionTitle}</Text>
            <View style={styles.headContacts}>
              <View style={styles.headContactsItem}>
                <FontAwesomeIcon icon={faCity} />
                <Text>{getFullAddress(location)}</Text>
              </View>
              {socials.map(({ href, value, icon }) => (
                <View key={`${href}-${value}`} style={styles.headContactsItem}>
                  <FontAwesomeIcon icon={icon} />
                  {href ? (
                    <Link href={href} style={styles.headContactsItemLink}>
                      {value}
                    </Link>
                  ) : (
                    <Text>{value}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
          {/* <View style={styles.headAvatar}>
            <Image src={avatar} style={styles.headAvatarImage} />
          </View> */}
        </View>
        <View style={styles.content}>
          <View style={styles.contentSection}>
            <Text style={styles.contentSectionTitle}>{titles.about}</Text>
            <Text style={styles.aboutText}>{shortAbout}</Text>
          </View>
          <View style={styles.contentSection}>
            <Text style={styles.contentSectionTitle}>{titles.skills}</Text>
            <View style={[styles.contentSectionList, styles.skills]}>
              {Object.entries(skills).map(([key, items]) => {
                const skillType = key as SkillTypeEnum;

                return (
                  <View key={key} style={styles.contentSubSection}>
                    <Text style={styles.contentSubSectionTitle}>
                      {skillsTitles[lang][skillType]} :
                    </Text>
                    <View style={styles.contentSubSectionList}>
                      {items.map((i, index) => (
                        <Text
                          key={i.name}
                          style={[styles.listItem, styles.skillsListItem]}
                        >
                          {i.name}
                          {index < items.length - 1 && ","}
                        </Text>
                      ))}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.contentHorizontal}>
            <View style={styles.contentLeft}>
              <View style={styles.contentSection}>
                <Text style={styles.contentSectionTitle}>
                  {titles.experiences}
                </Text>
                <View style={styles.contentSectionList}>
                  {filteredExperience.map(
                    ({ company, date, position, location, description }) => (
                      <View key={company} style={styles.listItem}>
                        <Text style={styles.listItemTitle}>
                          {position} - {company} |{" "}
                          <Text style={styles.listItemDateLocation}>
                            {date} ({location})
                          </Text>
                        </Text>
                        <View style={styles.listItemDescription}>
                          <Text style={styles.descriptionTitle}>
                            {description.title}
                          </Text>
                          <View style={styles.descriptionList}>
                            {description.list.map((i) => (
                              <Text key={i} style={styles.descriptionListItem}>
                                • {i}
                              </Text>
                            ))}
                          </View>
                        </View>
                      </View>
                    ),
                  )}
                </View>
              </View>
            </View>
            <View style={styles.contentRight}>
              <View style={styles.contentSection}>
                <Text style={styles.contentSectionTitle}>
                  {titles.education}
                </Text>
                <View style={styles.contentSectionList}>
                  {education.map(
                    ({ date, degree, fieldTitle, establishment, location }) => (
                      <View
                        key={establishment + degree}
                        style={styles.listItem}
                      >
                        <Text style={styles.listItemTitle}>{degree}</Text>
                        <Text style={styles.listItemFieldTitle}>
                          {fieldTitle}
                        </Text>
                        <Text style={styles.listItemPlace}>
                          {establishment}
                        </Text>
                        <View style={styles.listItemDateLocation}>
                          <Text style={styles.date}>{date}</Text>
                          <Text style={styles.location}>({location})</Text>
                        </View>
                      </View>
                    ),
                  )}
                </View>
              </View>
              <View style={styles.contentSection}>
                <Text style={styles.contentSectionTitle}>{titles.courses}</Text>
                <View style={styles.contentSectionList}>
                  {courses.map(
                    ({
                      date,
                      degree,
                      description,
                      establishment,
                      location,
                    }) => (
                      <View key={establishment} style={styles.listItem}>
                        {!!degree && (
                          <Text style={styles.listItemTitle}>{degree}</Text>
                        )}
                        {establishment && (
                          <Text style={styles.listItemPlace}>
                            {establishment}
                          </Text>
                        )}
                        {!!date && (
                          <View style={styles.listItemDateLocation}>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.location}>({location})</Text>
                          </View>
                        )}
                        <View style={styles.listItemDescription}>
                          <Text style={styles.descriptionTitle}>
                            {description.title}
                          </Text>
                          {description.list.length > 0 && (
                            <View style={styles.descriptionList}>
                              {description.list.map((i) => (
                                <Text
                                  key={i}
                                  style={styles.descriptionListItem}
                                >
                                  • {i}
                                </Text>
                              ))}
                            </View>
                          )}
                        </View>
                      </View>
                    ),
                  )}
                </View>
              </View>

              {lang === LangEnum.En && (
                <View style={styles.contentSection}>
                  <Text style={styles.contentSectionTitle}>
                    {titles.languages}
                  </Text>
                  <View
                    style={[styles.contentSectionList, styles.languagesList]}
                  >
                    {langs.map((l) => (
                      <Text
                        key={l.language}
                        style={styles.contentSubSectionListItem}
                      >
                        {l.language} - {l.level}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
