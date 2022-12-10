import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './cardhive.module.scss'

function CardHive( {img, btn, tittle, rare, power, bee} ) {
  return (
    <div className={s.card}>

        <div className={s.bgImg}>
            <img src={img} />
        </div>
        
        <div className={s.boxEnter}>

            <div className={s.boxDetaills}>
                <div>
                    <img src={rare}/>
                    <p>Peaceful</p>
                </div>
                <div>
                    <img src={power}/>
                    <p>852</p>
                </div>
                <div>
                    <img src={bee}/>
                    <p>78/100</p>
                </div>

            </div>
            
            <h4 className={s.tittle}>{tittle}</h4>

            <NavLink to='/bees'>
                <button>
                    <img src={btn} />
                    <h4>ENTER</h4>
                </button>
            </NavLink>
        </div>
    </div>
  )
}

export default CardHive