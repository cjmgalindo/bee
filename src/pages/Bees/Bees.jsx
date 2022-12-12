import React from 'react'
import s from './bees.module.scss'

import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'

import imgBack from './assets/back.png'
import btn from './assets/buttons.png'
import { NavLink } from 'react-router-dom'
import hiveBees from './assets/hive_bees.png'

import imgPower from './assets/power.png'
import imgRare from './assets/rare.png'
import imgBee from './assets/slot_bee.png'



function Bees() {
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
                    <img src={hiveBees} className={s.bgHive}/>

                    {/* <div className={s.grid}>
                      <div class="block">1</div>
                      <div class="block">2</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">5</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">9</div>
                      <div class="block">10</div>
                      <div class="block">1</div>
                      <div class="block">2</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">5</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">9</div>
                      <div class="block">10</div>
                          <div class="block">11</div>
                      <div class="block">12</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">15</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">19</div>
                      <div class="block">20</div>
                          <div class="block">21</div>
                      <div class="block">22</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">25</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">29</div>
                      <div class="block">30</div>
                          <div class="block">31</div>
                      <div class="block">32</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">35</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">39</div>
                      <div class="block">40</div>
                          <div class="block">41</div>
                      <div class="block">42</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">45</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">49</div>
                      <div class="block">50</div>
                          <div class="block">1</div>
                      <div class="block">2</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">5</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">9</div>
                      <div class="block">10</div>
                      <div class="block">1</div>
                      <div class="block">2</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">5</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">9</div>
                      <div class="block">10</div>
                          <div class="block">11</div>
                      <div class="block">12</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">15</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">19</div>
                      <div class="block">20</div>
                          <div class="block">21</div>
                      <div class="block">22</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">25</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">29</div>
                      <div class="block">30</div>
                          <div class="block">31</div>
                      <div class="block">82</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">85</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">89</div>
                      <div class="block">90</div>
                          <div class="block">91</div>
                      <div class="block">92</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">95</div>
                      <div class="block">abe</div>
                      <div class="block">abe</div>
                      <div class="block">98</div>
                      <div class="block">99</div>
                      <div class="block">100</div>
                    </div> */}

                  </div>

                  <div className={s.boxRigth}>
                    
                    {/* <div className={s.details}>
                      <h3>DETAILS:</h3>

                      <div className={s.boxBee}>

                        <div className={s.boxDetaills}>
                          <div>
                              <img src={imgRare}/>
                              <p>Peaceful</p>
                          </div>
                          <div>
                              <img src={imgPower}/>
                              <p>852</p>
                          </div>
                          <div>
                              <img src={imgBee}/>
                              <p>78/100</p>
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
                          <h3>UP LVL</h3>
                        </button>
                        <button>
                          <img src={btn} />
                          <h3>REMOVE</h3>
                        </button>
                      </div>

                    </div>

                    <div className={s.prod}>
                      <h3>PROD:</h3> <span>50 HNY</span>

                      <div className={s.boxTimeYellow}>
                        <span>2d</span>
                        <span>15h</span>
                        <span>20m</span>
                        <span>12s</span>
                      </div>

                      <button>
                        <img src={btn} />
                        <h3>CLAIM</h3>
                      </button>

                    </div> */}

                  </div>



                </div>

            </section>

            <DrBeep />
        </div>
       
    </>
  )
}

export default Bees