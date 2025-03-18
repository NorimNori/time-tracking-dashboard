import data from '@/services/data.json'
import './App.scss'
import Stat from '@/components/stat'
import Profile from '@/components/profile/Profile'
import Menu from '@/components/menu'

function App() {
  return (
    <main className="dashboard">
      <div className="dashboard__profile" role="complementary" aria-label="User Profile">
        <Profile />
        <Menu />
      </div>
      <div className="dashboard__stats" role="region" aria-labelledby="stats-title">
        <h2 id="stats-title" className="sr-only">User Activity Statistics</h2>
        {data.map((item) => (
          <Stat
            key={item.title}
            title={item.title}
            hours={item.timeframes.weekly.current}
            pastHours={item.timeframes.weekly.previous}
            aria-label={`${item.title} - ${item.timeframes.weekly.current} hours this week, ${item.timeframes.weekly.previous} last week`}
          />
        ))}
      </div>
    </main>
  )
}

export default App
