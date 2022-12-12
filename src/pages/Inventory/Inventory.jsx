import React from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './inventory.module.scss'

import cardVip from './assets/inventory card.png'
import btnSelect from './assets/but_options.png'
import iconSelect from './assets/icon_options.png'

function Inventory() {
  return (
    <div className={s.pageInventory}>
        <Navbar />
        <section className={s.sectionInventory}> 
        
            <div className={s.boxSelects}>
              <div className={s.select}>
                  <img src={btnSelect} className={s.btn} />
                  <h3>RARE</h3>
                  <img src={iconSelect} className={s.icon}/>
              </div>
              <div className={s.select}>
                  <img src={btnSelect} className={s.btn} />
                  <h3>TYPE</h3>
                  <img src={iconSelect} className={s.icon}/>
              </div>
              <div className={s.select}>
                  <img src={btnSelect} className={s.btn} />
                  <h3>BEE</h3>
                  <img src={iconSelect} className={s.icon}/>
              </div>
            </div>

            <div className={s.boxCards}>
                <div className={s.cards}>
                    
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                </div>
                <div className={s.page}>

                  <button className={`${s.arrow}`} id={s["prev-button"]} >
                    &lt;
                  </button>
                  <div className={s.btns}>
                      <button className={s.btn}>1</button>
                      <button className={s.btn}>2</button>
                      <button className={s.btn}>3</button>
                      <button className={s.btn}>4</button>
                      <button className={s.btn}>5</button>
                  </div>
                  <button className={`${s.arrow}`} id={s['next-button']}>
                    &gt;
                  </button>

                </div>
            </div>


        </section>

        <DrBeep />
      </div>
  )
}

export default Inventory