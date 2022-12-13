import React, { useState } from 'react'
import s from './buy.module.scss'

import btnExit from './assets/exit.png'
import gold from './assets/gold.png'
import energy from './assets/energy.png'
import header from './assets/table_header_modal.png'
import btnConfirm from './assets/button2.png'

function BuyEnergy({state, setstate}) {

    const [value, setValue] = useState(84);
  return (
    <>
        {state &&
            <div className={s.containerModalBuyEnergy}>

                <div className={s.boxModalBuyEnergy}>
                    <img src={btnExit} className={s.btnExit} onClick={()=> setstate(false)}/>
                
                    <button className={s.tittle}>
                        <img src={header} />
                        <h3>BUY ENERGY</h3>
                    </button>

                    <p className={s.text}>Time to rechange your energy</p>

                    <div className={s.boxRange}>
                        <img src={energy}/>
                        <div className={s.boxValue}>{value}</div>
                        <label for="vol">
                            <input type="range" id="vol" name="vol" min="0" max="100" onChange={(e)=>setValue(e.target.value)}/>
                        </label>
                    
                    </div>

                    <div className={s.boxCost}>
                        <img src={gold} />
                        <p>Total cost: 287 HNP</p>
                    </div>
                    <button className={s.btnConfirm}>
                        <img src={btnConfirm} />
                        <h4>CONFIRM</h4>
                    </button>
                </div> 
            </div>
        } 
    </>
  )
}

export default BuyEnergy