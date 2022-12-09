import React from 'react'
import s from './drBeep.module.scss'

import imgMiel from './assets/hony.png'
import imgUser from './assets/user_bee.png'

function DrBeep() {
  return (
    <div className={s.drBeep } >
        <div className={s.boxUser}>
            <img src={imgUser} className={s.imgUser}/>
            


            <div className={s.boxLetters}>

                <p className={s.nameUser}>DrBeebeep</p>
                <div className={s.boxMoney}>
                    <img src={imgMiel} />
                    <p className={s.money}>999,999</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DrBeep