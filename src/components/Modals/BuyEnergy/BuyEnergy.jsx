import React, { useState } from 'react'
import s from './buy.module.scss'

import btnExit from './assets/exit.png'
import gold from './assets/gold.png'
import energy from './assets/energy.png'
import header from './assets/table_header_modal.png'
import btnConfirm from './assets/button2.png'

function BuyEnergy({state, setstate}) {

    function handleInputChange(e) {
        let target = e.target
        // if (e.target.type !== 'range') {
        //   target = document.getElementById('range')
        // } 
        const min = target.min
        const max = target.max
        const val = target.value
        
        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
      }

    const [value, setValue] = useState(50);
  return (
    <>
        {state &&
            <div className={s.containerModalBuyEnergy}>

                <div className={s.boxModalBuyEnergy}>
                    <img src={btnExit} className={s.btnExit} onClick={()=> setstate(false)}/>
                
                    <button className={s.tittle}>
                        <img src={header} />
                        <h4>BUY ENERGY</h4>
                    </button>

                    <p className={s.text}>Time to rechange your energy</p>

                    <div className={s.boxRange}>
                        <img src={energy}/>
                        <div className={s.boxValue}>{value}</div>
                        
                        <input type="range" id="vol" name="vol" min="0" max="100" onChange={(e)=>setValue(e.target.value)} onInput={(e)=>handleInputChange(e)}/>
                        
                    
                    </div>

                    <div className={s.boxCost}>
                        <img src={gold} />
                        <p>Total cost: 287 HNP</p>
                    </div>
                    <button className={s.btnConfirm}>
                        <img src={btnConfirm} />
                        <h5>CONFIRM</h5>
                    </button>
                </div> 
            </div>
        } 
    </>
  )
}

export default BuyEnergy