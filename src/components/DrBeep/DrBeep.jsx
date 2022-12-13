import React, { useState } from 'react'
import s from './drBeep.module.scss'

import imgMiel from './assets/hony.png'
import imgUser from './assets/user_bee.png'
import energy from './assets/energy.png'
import BuyEnergy from '../Modals/BuyEnergy/BuyEnergy'

function DrBeep() {
  const [eDrBeep, setDrBeep] = useState(true);

  return (
    <div className={s.drBeep } >
        <div className={s.boxUser}>
            <div className={s.boxImg}>
              <img src={imgUser} className={s.imgUser}/>
              <div className={s.boxEnergy} onClick={()=> setDrBeep(!eDrBeep)} >
                <img src={energy} />
                <p> 84/100</p>
              </div>
            </div>
            


            <div className={s.boxLetters}>

                <p className={s.nameUser}>DrBeebeep</p>
                <div className={s.boxMoney}>
                    <img src={imgMiel} />
                    <p className={s.money}>999,999</p>
                </div>
                
            </div>
        </div>

        <BuyEnergy state={eDrBeep} setstate={setDrBeep}/>
    </div>
  )
}

export default DrBeep