
const Stat = ({title, hours, pastHours}) => {
  return (
    <div className="stat">
      <div className={`stat__header stat__header--${title}`}></div>
      <div className="stat__content">
        <h2 className="stat__title">{title}</h2>
        <p className="stat__hours">{hours}hrs</p>
        <p className="stat__previous">Last Week - {pastHours}hrs</p>
      </div>
    </div>
  )
}

export default Stat