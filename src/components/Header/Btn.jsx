import React from 'react'
import bgBtn from './assets/header_menu.png'
import s from './styles/btn.module.scss'

function btn( {icon, name}) {
  

  return (
    <div className={`${s.button} ${s[name]}`}>
        <img src={icon} className={s.icon}/>
        <img src={bgBtn} className={s.bgBtn}/>
        <h4 className={s.name}>{name} </h4>
    </div>
  )
}

export default btn