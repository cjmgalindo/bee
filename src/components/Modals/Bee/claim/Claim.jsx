import React from 'react'
import s from  './claim.module.scss'

import btnExit from '../assets/exit.png'
import header from '../assets/table_header_modal.png'
import btnConfirm from '../assets/button2.png'
import imgWater from '../assets/honey_jar.png'

function Claim( {state, setstate} ) {
  return (
    <>
        {state &&
            <div className={s.containerModalAddCard}>

                <div className={s.boxModalAddCard}>
                    <img src={btnExit} className={s.btnExit} onClick={()=> setstate(false)}/>
                
                    <button className={s.tittle}>
                        <img src={header} />
                        <h5>CLAIM</h5>
                    </button>

                    <div>
                      <p>Your power is higher this bee will be <br /> removed in 3, 2, 1... goodbye!</p>
                      <img src={imgWater} />
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

export default Claim