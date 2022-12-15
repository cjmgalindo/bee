import React, { useState } from 'react'
import s from './uplvl.module.scss'

import btnExit from '../assets/exit.png'
import header from '../assets/table_header_modal.png'
import btnConfirm from '../assets/button2.png'

import energy from '../assets/energy.png'
import money from '../assets/gold.png'
import time from '../assets/sandglass.png'


function BtnUpLevel( {state, setstate} ) {
  const [value, setValue] = useState(184)

  
  return (
    <>
        {state &&
            <div className={s.containerModalAddCard}>

                <div className={s.boxModalAddCard}>
                    <img src={btnExit} className={s.btnExit} onClick={()=> setstate(false)}/>
                
                    <button className={s.tittle}>
                        <img src={header} />
                        <h4>UPP LEVEL</h4>
                    </button>

                    <div className={s.content}>
                      <p className={s.ptext}>Increase your level</p>

                      <div className={s.counter}>
                        <img src={energy} />

                        <div>
                          <button onClick={()=> value === 200 ? setValue(200) : setValue(value+1)} ><h1>+</h1></button>
                          <span>{value}</span>
                          <button onClick={()=>setValue(value-1)}><h1>-</h1></button>
                        </div>
                      </div>
                      
                      <div className={s.text}>
                        <img src={money} />
                        <p>Level cost: 5821 HNP </p>
                      </div>
                      <div className={s.text}>
                        <img src={time} />
                        <p>Time required:</p>
                      </div>

                      <div className={s.boxTime}>
                        <span>2d : </span>
                        <span>48h : </span>
                        <span>37m : </span>
                        <span>25s</span>
                      </div>

                    </div>

                    <button className={s.btnConfirm}>
                        <img src={btnConfirm} />
                        <h5>CONFIRM</h5>
                    </button>

                </div> 
            </div>
        } 
    </>
  )
}

export default BtnUpLevel