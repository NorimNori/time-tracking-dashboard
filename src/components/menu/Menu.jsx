import './Menu.scss'

const Menu = () => {
  return (
    <section className="menu" role="navigation" aria-label="Timeframe selection">
      <ul className="menu__list" role="tablist">
        <li className="menu--item" role="tab" tabIndex={0}>Daily</li>
        <li className="menu--item" role="tab" tabIndex={0}>Weekly</li>
        <li className="menu--item" role="tab" tabIndex={0}>Monthly</li>
      </ul>
    </section>
  )
}

export default Menu