import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './card.module.scss'



function Card( {img, btn, tittle, color}) {
  return (
    <div className={s.card}>
        <div className={s.bgImg}>
            <img src={img} />
        </div>

        <h4 className={s.tittle}>{tittle}</h4>
        
        <div className={s.boxEnter}>
            
            <div className={s.color} style={{backgroundColor: color}}>

            </div>

            <NavLink to='/hive'>
                <button>
                    <img src={btn} />
                    <h4>ENTER</h4>
                </button>
            </NavLink>
        </div>
    </div>
  )
}

export default Card