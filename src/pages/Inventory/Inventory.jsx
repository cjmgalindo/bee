import React from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './inventory.module.scss'

import cardVip from './assets/inventory card.png'

function Inventory() {
  return (
    <div className={s.pageInventory}>
        <Navbar />
        <section className={s.sectionInventory}> 
        
            <div className={s.boxSelect}>
                
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

                </div>
            </div>


        </section>

        <DrBeep />
      </div>
  )
}

export default Inventory