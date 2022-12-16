import React from 'react'
import s from './hivegrid.module.scss'

function HiveGrid() {

const blocks = []
  for (let i = 1; i < 101; i++) {
    blocks.push(
      <div className={s.block}>
        {i}
      </div>
    )
  }
  return (
    <div className={s.grid}>
        {blocks}
    </div>
  )
}

export default HiveGrid