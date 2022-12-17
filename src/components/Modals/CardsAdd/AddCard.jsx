import React from 'react'
import s from './addcard.module.scss'

import btnExit from './assets/exit.png'


import check from './assets/check.png'
import header from './assets/table_header_modal.png'
import btnConfirm from './assets/button2.png'

function AddCard({state, setstate, imgCard}) {

    const selectorCards = (e) =>{
        console.log(e.target.classList)
        e.target.classList.toggle(s["select"]);


    }
    const card = [];
    for (let i = 0; i < 21; i++) {
        card.push(
            <div className={s.card } key={i} onClick={selectorCards}>
                <img src={imgCard} />

                <div>
                    <img src={check} className={s.imgCheck} />
                </div>
            </div>
        )   
    }

  
  return (
    <>
        {state &&
            <div className={s.containerModalAddCard}>

                <div className={s.boxModalAddCard}>
                    <img src={btnExit} className={s.btnExit} onClick={()=> setstate(false)}/>
                
                    <button className={s.tittle}>
                        <img src={header} />
                        <h4>STAKE ASSET</h4>
                    </button>

                    <p className={s.text}>Select your asset</p>

                    <div className={s.cards}>
                        {card}
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

export default AddCard
