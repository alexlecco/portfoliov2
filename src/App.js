import { useState, useEffect, Suspense } from 'react'
import './App.css'

// dependencies
import * as Scroll from 'react-scroll'
import { useTranslation } from 'react-i18next'

// constants
import database from './firebase';

// components
import Presentation from './components/Presentation'
import GoalsContainer from './components/body/GoalsContainer'
import SkillsContainer from './components/body/SkillsContainer'
import ExperienceContainer from './components/body/ExperienceContainer'
import PortfolioContainer from './components/body/PortfolioContainer'
import Contact from './components/body/Contact'
import Footer from './components/Footer'
// uncomment to show resume PDF
// import PdfStructure from "./pdf/PdfStructure"
// import { PDFViewer } from "@react-pdf/renderer"

let Element = Scroll.Element
let scroller = Scroll.scroller

function App() {
  const [language, setLanguage] = useState('english')
  const [theme, setTheme] = useState('Dark')
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const userRef = database.ref().child("data")
    listenForUser(userRef)
  }, [])

  const listenForUser = userRef => {
    userRef.on("value", snap => {
      const user = {
        name: snap.val().name,
        city: snap.val().city,
        country: snap.val().country,
        birthday: snap.val().birthday,
        phone: snap.val().phone,
        email: snap.val().email,
        profile: snap.val().profile,
        flag: snap.val().flag,
        avatar: snap.val().avatar,
        coverdark: snap.val().coverdark,
        coverlight: snap.val().coverlight,
        goals: snap.val().goals,
        studies: snap.val().studies,
        experience: snap.val().experience,
        mentoring: snap.val().mentoring,
        skills: snap.val().skills,
        languages: snap.val().languages,
        portfolio: snap.val().portfolio,
        social: snap.val().social,
        claps: snap.val().claps,
        _key: snap.key,
      }

      setUser(user)
      setLoading(false)
    })
  }

  const changeTheme = () => {
    setTheme(theme === 'Dark' ? 'Light' : 'Dark')
  }

  const changeLanguage = lang => {
    i18n.changeLanguage(lang === 'english' ? 'es' : 'en')
    setLanguage(lang === 'english' ? 'spanish' : 'english')
  }

  const {
    avatar,
    flag,
    name,
    city,
    country,
    birthday,
    phone,
    email,
    profile,
    coverdark,
    coverlight,
    goals,
    studies,
    experience,
    mentoring,
    skills,
    languages,
    portfolio,
    social,
    claps,
  } = user

  if (loading)
  return (
    <div className='h-screen bg-gray-400 flex flex-col items-center justify-center'>
      loading...
    </div>
  );

  return (
    <Suspense fallback='loading'>
      <div className='bg-fixed bg-center bg-cover md:pr-48 md:pl-48 select-none md:select-text'
        style={{
          backgroundImage: `url(${theme === "Dark" ? coverdark : coverlight})`,
        }}
      >
        <div className={`bg-transparent text-center min-h-screen`}>
          {/* uncomment to show resume PDF */}
          {/* <PDFViewer width={1500} height={1500}>
            <PdfStructure data={user} t={t} />
          </PDFViewer> */}
          <Presentation
            avatar={avatar}
            flag={flag}
            name={name}
            city={city}
            country={country}
            birthday={birthday}
            phone={phone}
            email={email}
            profile={profile}
            theme={theme}
            changeTheme={changeTheme}
            changeLanguage={changeLanguage}
            language={language}
            scroller={scroller}
            social={social}
            claps={claps}
            goals={goals}
            studies={studies}
            skills={skills}
            languages={languages}
            experience={experience}
            mentoring={mentoring}
            t={t}
          />

          <Element name='goalsElement'>
            <GoalsContainer theme={theme} goals={goals} t={t} language={language} />
          </Element>

          <Element name='skillsElement'>
            <SkillsContainer theme={theme} skills={skills} t={t} language={language} />
          </Element>

          <Element name='experienceElement'>
            <ExperienceContainer
              theme={theme}
              experience={experience}
              t={t}
              language={language}
            />
          </Element>

          <Element name='portfolioElement'>
            <PortfolioContainer
              theme={theme}
              portfolio={portfolio}
              t={t}
              language={language}
            />
          </Element>

          <Element name='contactElement'>
            <Contact theme={theme} socia={social} t={t} />
          </Element>

          <Footer name={name} theme={theme} />

        </div>
      </div>
    </Suspense>
  )
}

export default App
