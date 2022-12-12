import React, { useState } from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './ladeboard.module.scss'

import bgBtn from './assets/tab_bt.png'

function Ladeboard() {
  const [ePower, setPower] = useState(true);
  const [eTime, setTime] = useState(false);

  const list = [];
  for (let i = 1; i < 101; i++) {
    if (i === 1) {
      list.push(
        <li className={s.list} key={i} style={{backgroundColor:"#FFE47B"}}>
          <p>{i}</p>
          <p>Messi</p>
          <p>240</p>
          <p>280 GY/hr</p>
          
        </li>
      )

    }
    
    else if (i === 2) {
      list.push(
        <li className={s.list} key={i} style={{backgroundColor:"#FFAA43"}}>
          <p>{i}</p>
          <p>Messi</p>
          <p>240</p>
          <p>280 GY/hr</p>
          
        </li>
      )

    }
    else if (i === 3) {
          list.push(
            <li className={s.list} key={i} style={{backgroundColor:"#9B9B9B"}}>
              <p>{i}</p>
              <p>Messi</p>
              <p>240</p>
              <p>280 GY/hr</p>
              
            </li>
          )

    }else{
      list.push(
      <li className={s.list} key={i}>
        <p>{i}</p>
        <p>Messi</p>
        <p>240</p>
        <p>280 GY/hr</p>
        
      </li>
    )
    }

    
  }
  return (

    <div className={s.pageLadeboard}>
        <Navbar />
        <section className={s.sectionLadeboard}> 
        
          <div className={s.container}>

            <div className={s.btns}>
              <button onClick={()=>{
                setTime(false)
                setPower(true)}}>
                <img src={bgBtn} />
                <h3>POWERUP</h3>
              </button>
              <button className={s.time} 
              onClick={()=>{
                setTime(true) 
                setPower(false)}}>
              <img src={bgBtn} />
                <h3>TIME</h3>
              </button>
            </div>

            {ePower &&
              <div className={s.powerSection}>
                <ul>
                  <li className={`${s.boxTittle} `}>
                    <p>NO.</p>
                    <p>NAME</p>
                    <p>STAKED</p>
                    <p>POWER</p>
                  </li>
                  {list}
                </ul>
              </div>
            }
            
            {eTime &&
            <div className={s.timeSection} >
              <ul>
                    <li className={`${s.boxTittle} `}>
                      <p>NO.</p>
                      <p>NAME</p>
                      <p>STAKED</p>
                      <p>TIME</p>
                    </li>
                    {list}
                  </ul>
            </div>
            }

          </div>

        </section>

        <DrBeep />
      </div>

    
  )
}

export default Ladeboard