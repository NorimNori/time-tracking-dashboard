
const Stat = ({title, hours, pastHours}) => {
  return (
    <article className="stat" aria-labelledby={`stat-title-${title}`} aria-describedby={`stat-desc-${title}`}>
      <div className="stat__content">
        <div className= "stat__header">
          <h2 className="stat__title">{title}</h2>
          <span className="stat--icon"></span>      
        </div>
        <p className="stat__hours">{hours}hrs</p>
        <p id={`stat-desc-${title}`} className="stat__previous">Last Week - {pastHours}hrs</p>
      </div>
    </article>
  )
}

export default Stat