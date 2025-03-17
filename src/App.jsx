import data from '@/services/data.json'
import './App.scss'
import Stat from '@/components/stat'
import Profile from '@/components/profile/Profile'
import Menu from '@/components/menu'

function App() {
  return (
    <main className="dashboard">
      <div className="dashboard__profile">
        <Profile />
        <Menu />
      </div>
      <div className="dashboard__stats">
      {data.map((item) => (
        <Stat
          key={item.title}
          title={item.title}
          pastHours={item.timeframes.weekly.previous}
        />
      ))}
      </div>
    </main>
  )
}

export default App
