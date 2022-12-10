import React from 'react'
import s from './styles/NavBar.module.scss'
import Btn from './Btn'

import icon1 from './assets/icon_menu.png'
import icon2 from './assets/icon_menu2.png'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <header className='container-fluid'>
        <nav>
          <ul>
            <li>{<NavLink to={'/continents'}><Btn icon={icon1} name={"CONTINENTS"}/></NavLink>}</li>
            <li>{<NavLink to={'/inventory'}><Btn icon={icon2} name={"INVENTORY"}/></NavLink> }</li>
            <li>{<NavLink to={'/market'}><Btn icon={icon2} name={"MARKET"}/></NavLink>}</li>
            <li>{<NavLink to={'/exchange'}><Btn icon={icon2} name={"EXCHANGE"}/></NavLink>}</li>
          </ul>

        </nav>

        <div className={`${s.btns}`}>
          <ul>
            <li>
            <NavLink to="/ladeboard">
              <img src={icon1} />
            </NavLink>
            </li>
            <li><img src={icon2} /></li>
          </ul>
        </div>

    </header>
  )
}

export default Navbar