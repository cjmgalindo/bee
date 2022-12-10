import React from 'react'
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

import btnEnter from './assets/card_button.png'
import { NavLink } from 'react-router-dom'

function Garden() {
    

  return (
    <>
        <div className={s.pageGarden}>
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
                    <div className={s.select}>
                        <img src={btnSelect} className={s.btn} />
                        <h3>TYPE</h3>
                        <img src={iconSelect} className={s.icon}/>
                    </div>

                </div>
                <div className={s.cards}>
                    
                <div className={s.card}>
                    <div className={s.bgImg}>
                        <img src={cardAdd} />
                    </div>
                    <img src={btnAdd} className={s.btnAdd}/>

                    <div className={s.boxEnter}>
                        
                        <div className={s.color} >

                        </div>

                        <button>
                            <img src={btnEnter} />
                            <h4>STAKE</h4>
                        </button>
                    </div>
                </div>
                    <Card img={gTwo} btn={btnEnter} tittle="Garden 02" color="#00A5F5"/>
                    <Card img={gThree} btn={btnEnter} tittle="Garden 03" color="#00AF64"/>
                    <Card img={gFour} btn={btnEnter} tittle="Garden 04" color="#FE4447"/>
                    <Card img={gFive} btn={btnEnter} tittle="Garden 05" color="#FFA708"/>
                    <Card img={gOne} btn={btnEnter} tittle="Garden 06" color="#FE4447"/>
                    <Card img={gTwo} btn={btnEnter} tittle="Garden 07" color="#00A5F5"/>
                    <Card img={gThree} btn={btnEnter} tittle="Garden 08" color="#00AF64"/>
                    <Card img={gFour} btn={btnEnter} tittle="Garden 09" color="#FE4447"/>
                    <Card img={gFive} btn={btnEnter} tittle="Garden 10" color="#FFA708"/>
                    <Card img={gOne} btn={btnEnter} tittle="Garden 11" color="#FE4447"/>
                    <Card img={gTwo} btn={btnEnter} tittle="Garden 12" color="#00A5F5"/>
                    <Card img={gThree} btn={btnEnter} tittle="Garden 13" color="#00AF64"/>
                    <Card img={gFour} btn={btnEnter} tittle="Garden 14" color="#FE4447"/>
                    <Card img={gFive} btn={btnEnter} tittle="Garden 15" color="#FFA708"/>
                    <Card img={gOne} btn={btnEnter} tittle="Garden 16" color="#FE4447"/>
                    <Card img={gTwo} btn={btnEnter} tittle="Garden 17" color="#00A5F5"/>
                    <Card img={gThree} btn={btnEnter} tittle="Garden 18" color="#00AF64"/>
                    <Card img={gFour} btn={btnEnter} tittle="Garden 19" color="#FE4447"/>
                    <Card img={gFive} btn={btnEnter} tittle="Garden 20" color="#FFA708"/>

                </div>

            </section>
            <DrBeep />
        </div>
       
    </>
  )
}

export default Garden