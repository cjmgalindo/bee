import React, { useState } from 'react'
import s from './hive.module.scss'

import Navbar from '../../components/Header/Navbar'
import DrBeep from '../../components/DrBeep/DrBeep'
import { NavLink } from 'react-router-dom'

import cardHive from './assets/hive_bgcard.jpg'
import cardAdd from './assets/cardAdd.png'
import btnAdd from './assets/plus_icon.png'
import hiveCard from './assets/hive_card.png'
import btnEnter from './assets/card_button.png'
import imgBack from './assets/back.png'


import btn from './assets/button_tittlehive.png'
import btnSelect from './assets/but_options.png'
import iconSelect from './assets/icon_options.png'
import CardHive from '../../components/CardHive/CardHive'

import imgPower from './assets/power.png'
import imgRare from './assets/rare.png'
import imgBee from './assets/slot_bee.png'
import AddCard from '../../components/Modals/CardsAdd/AddCard'


function Hive( {img, link} ) {
    const [vType, setType] = useState("TYPE")
    const [sType, setActiveType] =useState(false)
    function showType(p) {
        setType(p)
        setActiveType(!sType)
    }

    const [vPower, setPower] = useState("POWER")
    const [sPower, setActivePower] =useState(false)
    function showPower(p) {
        setPower(p)
        setActivePower(!sType)
    }

    const [vSpace, setSpace] = useState("SPACE")
    const [sSpace, setActiveSpace] =useState(false)
    function showSpace(p) {
        setSpace(p)
        setActiveSpace(!sType)
    }

    const [eAddCard, setAddCard] = useState(false);


  return (
    <>
        <div className={s.pageHive} style={{backgroundImage: `url(${img.bg})`}}>
            <Navbar />
            <section className={s.sectionHive}>

                <div className={s.boxBtns}>

                    <div className={s.boxLeft}>
                        <NavLink to={`/continents/garden${link}`}>
                            <img src={imgBack} className={s.btnBack}/>
                        </NavLink>
                        <div className={s.btnTittle}>
                           <img src={btn} />
                           <h4>BEEHIVES</h4>
                        </div>
                    </div>

                    <div className={s.boxSelects}>
                        <div className={`${s.select} ${sType ? s.activeSelectType : ""}`} 
                        onClick={()=>setActiveType(!sType)}>
                            <img src={btnSelect} className={s.btn} />
                            <h3>{vType}</h3>
                            <img src={iconSelect} className={s.icon}/>

                            <div className={s.option}>
                                <div onClick={()=>showType('option 1')}>option 1</div>
                                <div onClick={()=>showType('option 2')}>option 2</div>
                                <div onClick={()=>showType('option 3')}>option 3</div>
                                <div onClick={()=>showType('option 4')}>option 4</div>
                            </div>

                        </div>
                        <div className={`${s.select} ${sPower ? s.activeSelectPower : ""}`} 
                        onClick={()=>setActivePower(!sPower)}>
                            <img src={btnSelect} className={s.btn} />
                            <h3>{vPower}</h3>
                            <img src={iconSelect} className={s.icon}/>
                        
                            <div className={s.option}>
                                <div onClick={()=>showPower('option 1')}>option 1</div>
                                <div onClick={()=>showPower('option 2')}>option 2</div>
                                <div onClick={()=>showPower('option 3')}>option 3</div>
                                <div onClick={()=>showPower('option 4')}>option 4</div>
                            </div>
                        </div>
                        <div className={`${s.select} ${sSpace ? s.activeSelectSpace : ""}`} 
                        onClick={()=>setActiveSpace(!sSpace)}>
                            <img src={btnSelect} className={s.btn} />
                            <h3>{vSpace}</h3>
                            <img src={iconSelect} className={s.icon}/>
                        
                            <div className={s.option}>
                                <div onClick={()=>showSpace('option 1')}>option 1</div>
                                <div onClick={()=>showSpace('option 2')}>option 2</div>
                                <div onClick={()=>showSpace('option 3')}>option 3</div>
                                <div onClick={()=>showSpace('option 4')}>option 4</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={s.containerCards}>
                    <div className={s.cards}>
                        
                        <div className={s.card}>
                            <div className={s.bgImg}>
                                <img src={cardAdd} />
                            </div>
                            <img src={btnAdd} className={s.btnAdd}/>
                    
                            <div className={s.boxEnter}>
                    
                                <button onClick={()=> setAddCard(!eAddCard)}>
                                    <img src={btnEnter} />
                                    <h4>STAKE</h4>
                                </button>
                            </div>
                        </div>
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 02"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                    
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 03"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 04"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 05"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 06"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 07"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 08"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 09"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 10"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        /><CardHive img={img.card} btn={btnEnter} tittle="HIVE 11"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 12"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 13"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        /><CardHive img={img.card} btn={btnEnter} tittle="HIVE 14"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 15"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 16"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 16"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        /><CardHive img={img.card} btn={btnEnter} tittle="HIVE 17"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 18"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 19"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        <CardHive img={img.card} btn={btnEnter} tittle="HIVE 20"
                            rare={imgRare} power={imgPower} bee={imgBee} link={link}
                        />
                        
                    
                    </div>
                </div>

            </section>
            <DrBeep />

            <AddCard state={eAddCard} setstate={setAddCard} imgCard={hiveCard}/>

        </div>
       
    </>
  )
}

export default Hive