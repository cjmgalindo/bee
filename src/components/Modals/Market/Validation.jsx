import React from 'react'
import s from './validation.module.scss'


import btnExit from './assets/exit.png'
import header from './assets/table_header_modal.png'
import imgBee from './assets/bee_wait.gif'

function Validation( {state, setstate } ) {
    
  return (
    <>
        {state &&
            <div className={s.containerModalAddCard}>

                <div className={s.boxModalAddCard}>
                    <img src={btnExit} className={s.btnExit} onClick={()=> setstate(false)}/>
                
                    <button className={s.tittle}>
                        <img src={header} />
                        <h4>PROCESSING</h4>
                    </button>

                   <div>
                     <p>Validating transaction, please <br /> wait a moment....</p>
                     <img src={imgBee} />
                   </div>

                    

                    

                </div> 
            </div>
        } 
    </>
  )
}

export default Validation