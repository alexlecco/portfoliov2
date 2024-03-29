import ArrowForward from '@mui/icons-material/ArrowForward'

const GoalsContainer = ({ theme, goals, t, language }) => {
  const getGoalText = goal => (language === "english" ? goal.en : goal.es)

  return (
    <div
      className={`min-h-screen flex flex-col justify-center align-items-center ${theme} h-auto pl-8 pr-8 md:pr-20 md:pl-20 pb-20`}
    >
      <h1 className='text-center md:text-left md:pl-24 text-lg pt-8'>
        {t("titles.title1")}
        <span className='ml-2' role='img' aria-label='Professional Goals'>
          🏆
        </span>
      </h1>
      <div className='text-left pt-8'>
        {goals &&
          goals.map((goal, index) => (
            <div className='flex flex-row justify-start pb-2' key={index}>
              <ArrowForward />
              <span className='pl-2'>{getGoalText(goal)}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default GoalsContainer
