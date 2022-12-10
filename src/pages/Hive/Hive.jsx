import React from 'react'
import s from './hive.module.scss'

import Navbar from '../../components/Header/Navbar'
import DrBeep from '../../components/DrBeep/DrBeep'
import { NavLink } from 'react-router-dom'

import cardHive from './assets/hive_bgcard.jpg'
import cardAdd from './assets/cardAdd.png'
import btnAdd from './assets/plus_icon.png'

import btnEnter from './assets/card_button.png'
import imgBack from './assets/back.png'

import btn from './assets/button_tittlehive.png'
import btnSelect from './assets/but_options.png'
import iconSelect from './assets/icon_options.png'
import CardHive from '../../components/CardHive/CardHive'

import imgPower from './assets/power.png'
import imgRare from './assets/rare.png'
import imgBee from './assets/slot_bee.png'


function Hive() {
  return (
    <>
        <div className={s.pageHive}>
            <Navbar />
            <section className={s.sectionHive}>

                <div className={s.boxBtns}>

                    <div className={s.boxLeft}>
                        <NavLink to='/garden'>
                            <img src={imgBack} className={s.btnBack}/>
                        </NavLink>
                        <div className={s.btnTittle}>
                           <img src={btn} />
                           <h4>BEEHIVES</h4>
                        </div>
                    </div>

                    <div className={s.boxSelects}>
                        <div className={s.select}>
                            <img src={btnSelect} className={s.btn} />
                            <h3>TYPE</h3>
                            <img src={iconSelect} className={s.icon}/>
                        </div>
                        <div className={s.select}>
                            <img src={btnSelect} className={s.btn} />
                            <h3>POWER</h3>
                            <img src={iconSelect} className={s.icon}/>
                        </div>
                        <div className={s.select}>
                            <img src={btnSelect} className={s.btn} />
                            <h3>SPACE</h3>
                            <img src={iconSelect} className={s.icon}/>
                        </div>
                    </div>

                </div>
                <div className={s.cards}>
                    
                    <div className={s.card}>
                        <div className={s.bgImg}>
                            <img src={cardAdd} />
                        </div>
                        <img src={btnAdd} className={s.btnAdd}/>

                        <div className={s.boxEnter}>

                            <button>
                                <img src={btnEnter} />
                                <h4>STAKE</h4>
                            </button>
                        </div>
                    </div>
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 02"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />

                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 03"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 04"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 05"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 06"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 07"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 08"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 09"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 10"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    /><CardHive img={cardHive} btn={btnEnter} tittle="HIVE 11"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 12"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 13"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    /><CardHive img={cardHive} btn={btnEnter} tittle="HIVE 14"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 15"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 16"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 16"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    /><CardHive img={cardHive} btn={btnEnter} tittle="HIVE 17"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 18"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 19"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    <CardHive img={cardHive} btn={btnEnter} tittle="HIVE 20"
                        rare={imgRare} power={imgPower} bee={imgBee}
                    />
                    

                </div>

            </section>
            <DrBeep />
        </div>
       
    </>
  )
}

export default Hive