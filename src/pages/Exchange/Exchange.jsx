import React, { useState } from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './exchange.module.scss'


import btnTittle from './assets/button_tittlehive.png'
import btnStake from './assets/button_green.png'
import btnBuy from './assets/button_red.png'
import card from './assets/pass_card.png'
import tabExchange from './assets/tab_bt.png'
import tabStake from './assets/tab_bt2stake.png'
import AddCard from '../../components/Modals/CardsAdd/AddCard'


function Exchange() {
    const [eExchange, setExchange] = useState(true);
    const [eStake, setStake] = useState(false);

    const [eAddCard, setAddCard] = useState(false);
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
                <button onClick={()=> setAddCard(!eAddCard)}>
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
            <div className={s.btns}>
                <button onClick={()=>{
                    setStake(false)
                    setExchange(true)}}>
                    <img src={tabExchange} />
                    <h3>EXCHANGE</h3>
                </button>
                <button className={s.time} 
                    onClick={()=>{
                    setStake(true) 
                    setExchange(false)}}>
                    <img src={tabStake} />
                    <h3>STAKE</h3>
                </button>
            </div>

            {eExchange &&
                <div className={s.exchangeSection}>

                    <div className={s.box}>
                        <h4>DEPOSIT</h4>
                        <span>Balance: 250</span>

                        <div className={s.boxInput}>
                            <input type="text" />
                            <button>MAX</button>
                        </div>
                        <button>
                            <h5>CONFIRM</h5>
                        </button>
                    </div>

                    <div className={s.box}>
                        <h4>WITHDRAW</h4>
                        <span>Balance: 200</span>
                        <div className={s.boxInput}>
                            <input type="text" />
                            <button>MAX</button>
                        </div>
                        <button>
                            <h5>CONFIRM</h5>
                        </button>
                    </div>

                    <div className={s.boxText}>
                        <h5>FEE: 70%</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
            }
            
            {eStake &&
                <div className={s.stakeSection} >
                    <div className={s.boxYellow}>
                        <div className={s.boxOne}>
                            <h4>TOTAL STAKED</h4>
                            <div>
                                <p>852020.55</p>
                                <p className={s.xd}>XDD</p>
                            </div>
                        </div>

                        <div className={s.boxTwo}>
                            <div className={s.boxDayli}>
                                <h4>DAYLI REWARD</h4>
                                <div>
                                    <p>5800</p>
                                    <p className={s.xd}>XDD</p>
                                </div>
                            </div>
                            <div className={s.boxNext}>
                                <h4>NEXT DROP:</h4>
                                <p>16 : 28 : 07</p>
                                
                            </div>
                        </div>

                    </div>

                    <div className={s.boxInput}>
                        <h4>YOU STAKED: 250(0.002%)</h4>
                        <div>
                            <input type="text" />
                            <button>MAX</button>
                        </div>
                    </div>

                    <div className={s.btnsStake}>
                        <button className={s.btnStake}>STAKE</button>
                        <button className={s.btnUnstake}>UNSTAKE</button>
                    </div>
                </div>
            }
          </div>


        </section>

        <DrBeep />
        <AddCard state={eAddCard} setstate={setAddCard} imgCard={card}/>
      </div>
  )
}

export default Exchange