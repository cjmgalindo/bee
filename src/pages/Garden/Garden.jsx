import React, { useState } from 'react'
import s from './garden.module.scss'

import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'

import imgBack from './assets/back.png'
import btn from './assets/but1.png'
import btnSelect from './assets/but_options.png'
import iconSelect from './assets/icon_options.png'
import Card from '../../components/CardGarden/Card'

import gOne from './assets/garden01.jpg'
import gTwo from './assets/garden02.jpg'
import gThree from './assets/garden01.jpg'
import gFour from './assets/garden04.jpg'
import gFive from './assets/garden05.jpg'
import cardAdd from './assets/cardAdd.png'
import btnAdd from './assets/plus_icon.png'
import gardenCard from './assets/garden_card.png'

import btnEnter from './assets/card_button.png'
import { NavLink } from 'react-router-dom'
import AddCard from '../../components/Modals/CardsAdd/AddCard'



function Garden({img, link}) {
    const [value, setValue] = useState("TYPE")
    const [active, setActive] = useState(false)

    function show(p) {
        setValue(p)
        setActive(!active)
        
    }

    const [eAddCard, setAddCard] = useState(false);
    const cards= []
    const colors = ["#FE4447","#00A5F5", "#00AF64","#FE4447","#FFA708","#FE4447","#00A5F5", "#00AF64","#FE4447","#FFA708","#FE4447","#00A5F5", "#00AF64","#FE4447","#FFA708","#FE4447","#00A5F5", "#00AF64","#FE4447","#FFA708"]

    for (let i = 2; i < 21; i++) {
        if(i<10){
            cards.push(
                <Card img={img.card} btn={btnEnter} tittle={"Garden 0"+ i} color={colors[i-1]} key={i} link={link}/>
            )
        } else{
            cards.push(
                <Card img={img.card} btn={btnEnter} tittle={"Garden "+ i} color={colors[i-1]} key={i} link={link}/>
            )
        }
        
    }
  return (
    <>
        <div className={s.pageGarden} style={{backgroundImage: `url(${img.bg})`}}>
            <Navbar />
            <section className={s.sectionGarden}>
                
                <div className={s.boxBtns}>
                    <div className={s.boxLeft}>
                        <NavLink to='/continents'>
                            <img src={imgBack} className={s.btnBack}/>
                        </NavLink>
                        <div className={s.btnTittle}>
                           <img src={btn} />
                           <h4>GREENHOUS</h4>
                        </div>
                    </div>

                    <div className={`${s.select} ${active ? s.activeSelectGarden : ""}`} 
                    onClick={()=>setActive(!active)}>
                        <img src={btnSelect} className={s.btn} />
                        <h3>{value}</h3>
                        <img src={iconSelect} className={s.icon}/>

                        <div className={s.option}>
                            <div onClick={()=>show('option 1')}>option 1</div>
                            <div onClick={()=>show('option 2')}>option 2</div>
                            <div onClick={()=>show('option 3')}>option 3</div>
                            <div onClick={()=>show('option 4')}>option 4</div>
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
                                
                                <div className={s.color} >
                        
                                </div>
                        
                                <button onClick={()=> setAddCard(!eAddCard)} >
                                    <img src={btnEnter} />
                                    <h4>STAKE</h4>
                                </button>
                            </div>
                        </div>
                        {cards}
                    </div>
                </div>

            </section>
            <DrBeep />
            
            <AddCard state={eAddCard} setstate={setAddCard} imgCard={gardenCard}/>
        </div>
       
    </>
  )
}

export default Garden