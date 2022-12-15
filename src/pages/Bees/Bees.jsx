import React, { useState } from 'react'
import s from './bees.module.scss'

import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'

import imgBack from './assets/back.png'
import btn from './assets/buttons.png'
import { NavLink } from 'react-router-dom'
import hiveBees from './assets/hive_bees.png'
import beeCard from './assets/bee_card.png'

import imgPower from './assets/power.png'
import imgRare from './assets/rare.png'
import imgBee from './assets/bee_worker.png'
import addCard from './assets/addCard.png'
import AddCard from '../../components/Modals/CardsAdd/AddCard'
import BtnUpLevel from '../../components/Modals/Bee/btnUplvl/BtnUpLevel'
import RemoveModal from '../../components/Modals/Bee/remove/RemoveModal'
import Claim from '../../components/Modals/Bee/claim/Claim'





function Bees() {
  const [eLvl, setLvl] = useState(false);
  const [eRemove, setRemove] = useState(false)
  const [eClaim, setClaim] = useState(false)

  const [eAddCard, setAddCard] = useState(false);


  return (
    <>
        <div className={s.pageBees}>
            <Navbar />

            <section className={s.sectionBees}>

                <div className={s.boxBtns}>
                    <div className={s.boxLeft}>
                        <NavLink to='/hive'>
                            <img src={imgBack} className={s.btnBack}/>
                        </NavLink>
                        <div className={s.btnTittle}>
                           <img src={btn} />
                           <h4>HIVE001</h4>
                        </div>
                    </div>
                    

                </div>

                <div className={s.content}>

                  <div className={s.boxGrid}>
                    
                  </div>

                  <div className={s.boxRigth}>
                    
                    {/* <div className={s.boxOne}>

                      <div className={s.details}>
                        <h4>DETAILS:</h4>
                      
                        <div className={s.boxBee}>
                          <img src={imgBee} className={s.imgBee}/>
                      
                          <div className={s.boxDetaills}>
                            <div>
                                <img src={imgRare}/>
                                <p>Epic</p>
                            </div>
                            <div>
                                <img src={imgPower}/>
                                <p>589</p>
                            </div>
                            <div>
                                <img src={imgBee}/>
                                <p>250</p>
                            </div>
                      
                          </div>
                      
                        </div>
                        
                        <div className={s.boxTimeBlack}>
                          <span>2d</span>
                          <span>15h</span>
                          <span>20m</span>
                          <span>12s</span>
                        </div>
                      
                        <div className={s.btns}>
                          <button>
                            <img src={btn} />
                            <h5>UP LVL</h5>
                          </button>
                          <button>
                            <img src={btn} />
                            <h5>REMOVE</h5>
                          </button>
                        </div>
                      
                      </div>
                      
                      <div className={s.prod}>
                        <h4>PROD: <span>50 HNY</span></h4> 
                      
                        <div className={s.boxTimeYellow}>
                          <span>2d</span>
                          <span>15h</span>
                          <span>20m</span>
                          <span>12s</span>
                        </div>
                      
                        <button>
                          <img src={btn} />
                          <h5>CLAIM</h5>
                        </button>
                      
                      </div>
                    </div> */}

                    <div className={s.boxTwo}>

                      <div className={s.details}>
                        <h4>DETAILS:</h4>
                      
                        <div className={s.boxBee}>
                          <img src={addCard} className={s.imgBee} onClick={()=> setAddCard(!eAddCard)}/>
                      
                          <div className={s.boxDetaills}>
                            <div>
                                <img src={imgRare}/>
                                <p>Epic</p>
                            </div>
                            <div>
                                <img src={imgPower}/>
                                <p>589</p>
                            </div>
                            <div>
                                <img src={imgBee}/>
                                <p>250</p>
                            </div>
                      
                          </div>
                      
                        </div>
                        
                        <div className={s.boxTimeBlack}>
                          <span>0d</span>
                          <span>0h</span>
                          <span>0m</span>
                          <span>0s</span>
                        </div>
                      
                        <div className={s.btns}>
                          <button onClick={()=> setLvl(!eLvl)}>
                            <img src={btn} />
                            <h5>UP LVL</h5>
                          </button>
                          <button onClick={()=> setRemove(!eRemove)}>
                            <img src={btn} />
                            <h5>REMOVE</h5>
                          </button>
                        </div>
                      
                      </div>
                      
                      <div className={s.prod}>
                        <h4>PROD: <span>00 HNY</span></h4> 
                      
                        <div className={s.boxTimeYellow}>
                          <span>0d</span>
                          <span>00h</span>
                          <span>00m</span>
                          <span>00s</span>
                        </div>
                      
                        <button onClick={()=> setClaim(!eClaim)}>
                          <img src={btn} />
                          <h5>CLAIM</h5>
                        </button>
                      
                      </div>
                    </div>

                  </div>



                </div>

            </section>

            <DrBeep />

            <AddCard state={eAddCard} setstate={setAddCard} />

            <BtnUpLevel state={eLvl} setstate={setLvl} />
            <RemoveModal state={eRemove} setstate={setRemove} />
            <Claim state={eClaim} setstate={setClaim} />
        </div>
       
    </>
  )
}

export default Bees