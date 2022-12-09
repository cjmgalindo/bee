import React from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './exchange.module.scss'


import btnTittle from './assets/button_tittlehive.png'
import btnStake from './assets/button_green.png'
import btnBuy from './assets/button_red.png'
import card from './assets/pass_card.png'
import tabExchange from './assets/tab_bt.png'
import tabStake from './assets/tab_bt2stake.png'


function Exchange() {
  return (
    <div className={s.pageExchange}>
        <Navbar />
        <section className={s.sectionExchange}> 

          <div className={s.boxPassport}>
            <div className={s.boxTittle}>
                <img src={btnTittle} />
                <h4>PASSPORT</h4>
            </div>

            <div className={s.time}>
                <span className={s.tm}>
                    22h
                </span>
                <span className={s.tm}>
                    20m
                </span>
                <span className={s.tm}>
                    12s
                </span>
            </div>

            <img src={card} className={s.card}/>

            <div className={s.btns}>
                <button>
                    <img src={btnStake} />
                    <h3>STAKE</h3>
                </button>
                <button>
                    <img src={btnBuy} />
                    <h3>BUY</h3>
                </button>
            </div>

          </div>

          <div className={s.boxChange}>

          </div>


        </section>

        <DrBeep />
      </div>
  )
}

export default Exchange