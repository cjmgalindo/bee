import React, { useState } from 'react'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'
import s from './inventory.module.scss'

import cardVip from './assets/inventory card.png'
import btnSelect from './assets/but_options.png'
import iconSelect from './assets/icon_options.png'

function Inventory() {
  const [vRare, setRare] = useState("RARE")
    const [sRare, setActiveRare] = useState(false)
    function showRare(p) {
        setRare(p)
        setActiveRare(!sRare)
    }

    const [vType, setType] = useState("TYPE")
    const [sType, setActiveType] =useState(false)
    function showType(p) {
        setType(p)
        setActiveType(!sType)
    }

    const [vBee, setBee] = useState("BEE")
    const [sBee, setActiveBee] =useState(false)
    function showBee(p) {
        setBee(p)
        setActiveBee(!sBee)
    }
  return (
    <div className={s.pageInventory}>
        <Navbar />
        <section className={s.sectionInventory}> 
        
            <div className={s.boxSelects}>

              <div className={`${s.select} ${sRare ? s.activeSelectRare : ""}`} 
              onClick={()=>setActiveRare(!sRare)}>
                  <img src={btnSelect} className={s.btn} />
                  <h3>{vRare}</h3>
                  <img src={iconSelect} className={s.icon}/>

                  <div className={s.option}>
                    <div onClick={()=>showRare('option 1')}>option 1</div>
                    <div onClick={()=>showRare('option 2')}>option 2</div>
                    <div onClick={()=>showRare('option 3')}>option 3</div>
                    <div onClick={()=>showRare('option 4')}>option 4</div>
                  </div>
              </div>
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
              <div className={`${s.select} ${sBee ? s.activeSelectBee : ""}`} 
              onClick={()=>setActiveBee(!sBee)}>
                  <img src={btnSelect} className={s.btn} />
                  <h3>{vBee}</h3>
                  <img src={iconSelect} className={s.icon}/>

                  <div className={s.option}>
                    <div onClick={()=>showBee('option 1')}>option 1</div>
                    <div onClick={()=>showBee('option 2')}>option 2</div>
                    <div onClick={()=>showBee('option 3')}>option 3</div>
                    <div onClick={()=>showBee('option 4')}>option 4</div>
                  </div>
              </div>
            </div>

            <div className={s.boxCards}>
                <div className={s.cards}>
                    
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                    <img src={cardVip} />
                </div>
                <div className={s.page}>

                  <button className={`${s.arrow}`} id={s["prev-button"]} >
                    &lt;
                  </button>
                  <div className={s.btns}>
                      <button className={s.btn}>1</button>
                      <button className={s.btn}>2</button>
                      <button className={s.btn}>3</button>
                      <button className={s.btn}>4</button>
                      <button className={s.btn}>5</button>
                  </div>
                  <button className={`${s.arrow}`} id={s['next-button']}>
                    &gt;
                  </button>

                </div>
            </div>


        </section>

        <DrBeep />
      </div>
  )
}

export default Inventory