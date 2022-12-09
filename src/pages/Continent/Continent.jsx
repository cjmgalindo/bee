import React from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './continent.module.scss'


import desert from './assets/desert.png'
import green from './assets/green.png'
import ice from './assets/ice.png'
import volcan from "./assets/volcan.png"
import invisible from "./assets/invisible.png";


function Continent() {
  return (
    
      <div className={s.pageContinent}>
        <Navbar />
        <section className={s.sectionContinent}> 

          <div className={s.maps}>
              <div className={s.div1}>
                <img src={green}  />
              </div>
              <div className={s.div2}>
                <img src={ice} />
              </div>
              <div className={s.div3}>
                <img src={desert} />
              </div>
              <div className={s.div4}>
                <img src={volcan} />
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