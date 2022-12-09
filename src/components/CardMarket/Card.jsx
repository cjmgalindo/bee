import React from 'react'
import s from './card.module.scss'
import targu from './assets/targu.png'
import btn from './assets/buy_button.png'
import boxMarket from './assets/box_market.png'
import iconBox from './assets/iconbox.png'

function Card( {tittle, number}) {
  return (
    <div className={s.card}>

        <h3>{tittle}</h3>

        <img src={boxMarket} className={s.boxMarket}/>

        <img src={targu} className={s.targu}/>

        <div className={s.icon}>
            <span>{number}</span>
            <img src={iconBox} />
        </div>
        <button>
            <img src={btn} />
            <h2>BUY</h2>
        </button>

    </div>
  )
}

export default Card