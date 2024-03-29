import React from "react"
import { Document, Page, StyleSheet } from "@react-pdf/renderer"
import Presentation from "./page1/Presentation"
import Profile from "./page1/Profile"
import Goals from "./page1/Goals"
import Studies from "./page1/Studies"
import Skills from "./page2/Skills"
import Languages from "./page3/Languages"
import Experience from "./page3/Experience"
import Mentoring from "./page4/Mentoring"

const PdfStructure = ({ data, t }) => {
  const getStringYear = () => {
    const today = new Date(Date.now())
    const year = today.toString().substring(11, 15)

    return year
  }

  const year = getStringYear()

  return (
    <Document
      author='Alex Villecco'
      subject={`Resume of Alex - ${year}`}
      title={`Alex Villecco resume - ${year}`}
    >
      <Page style={styles.page}>
        <Presentation data={data} styles={styles} t={t} />
        <Profile data={data} styles={styles} t={t} />
        <Goals data={data} styles={styles} t={t} />
        <Studies data={data} styles={styles} t={t} />
        <Languages data={data} styles={styles} t={t} />
      </Page>

      <Page style={styles.page}>
        <Skills data={data} styles={styles} t={t} />
      </Page>

      <Page style={styles.page}>
        <Experience data={data} styles={styles} t={t} />
      </Page>

      <Page style={styles.page}>
        <Mentoring data={data} styles={styles} t={t} />
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  documentTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  page: {
    padding: 20,
    color: "#8D8F8D",
    fontSize: 14,
  },
  pageTop: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 60,
    color: "#8D8F8D",
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  midSectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  midSection: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "50%",
    height: 200,
    paddingRight: 20,
  },
  sectionTitle: {
    color: "#FF006B",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  sectionItem: {
    marginBottom: 10,
  },
  sectionSubitem: {
    marginBottom: 5,
    paddingLeft: 7,
  },
  sectionSubtitle: {
    color: "#811ADA",
    marginBottom: 10,
  },
  image: {
    width: "20",
    backgroundColor: "grey",
    marginRight: 5,
  },
})

export default PdfStructure
