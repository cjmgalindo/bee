import React from 'react'
import s from './hivegrid.module.scss'

import img from './assets/bee_worker.png'

function HiveGrid( {setstate}) {

const blocks = []
  for (let i = 1; i < 101; i++) {
    if( i == 3 || i == 4 || i == 6 || i == 7 || i == 8 || i == 13 || i == 18 || i == 19 || i == 22 ){
      blocks.push(
      <div className={s.block} onClick={()=>setstate(true)} key={i}>
        <img src={img} />
      </div>
      )
    } else{
      blocks.push(
        <div className={s.block} onClick={()=>setstate(false)} key={i}>
          {i}
        </div>
        )
    }
    
  }
  return (
    <div className={s.grid}>
        {blocks}
    </div>
  )
}

export default HiveGrid