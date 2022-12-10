import React from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './continent.module.scss'


import desert from './assets/desert.png'
import green from './assets/green.png'
import ice from './assets/ice.png'
import volcan from "./assets/volcan.png"
import invisible from "./assets/invisible.png";
import { NavLink } from 'react-router-dom'


function Continent() {
  return (
    
      <div className={s.pageContinent}>
        <Navbar />
        <section className={s.sectionContinent}> 

          <div className={s.maps}>
              <div className={s.div1}>
                <NavLink to='/garden'>
                  <img src={green} className={s.imgGreen}  />
                </NavLink>
              </div>
              <div className={s.div2}>
                <NavLink to='/garden'>
                  <img src={ice} className={s.imgHive}/>
                </NavLink>
              </div>
              <div className={s.div3}>
                <NavLink to='/garden' >
                  <img src={desert} className={s.imgBees}/>
                </NavLink>
              </div>
              <div className={s.div4}>
                <NavLink to='/garden'>
                  <img src={volcan} className={s.imgVolcan}/>
                </NavLink>
              </div>
              
              
              <div className={s.div5}>
                <img src={invisible} />
              </div>
          </div>


        </section>

        <DrBeep />
      </div>
  )
}

export default Continent