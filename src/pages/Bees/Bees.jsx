import React from 'react'
import s from './bees.module.scss'

import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'

import imgBack from './assets/back.png'
import btn from './assets/buttons.png'
import { NavLink } from 'react-router-dom'


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
                <div className={s.cards}>



                </div>

            </section>

            <DrBeep />
        </div>
       
    </>
  )
}

export default Bees