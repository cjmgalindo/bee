import React from 'react'
import Card from '../../components/CardMarket/Card'
import DrBeep from '../../components/DrBeep/DrBeep'
import Navbar from '../../components/Header/Navbar'

import s from './market.module.scss'

function Market() {
  return (
    <div className={s.pageMarket}>
        <Navbar />
        <section className={s.sectionMarket}>
          <div className={s.boxCards}>
                <div className={s.cards}>
                  <Card tittle={"Tittle01"} number={170}  />
                  <Card tittle={"Tittle02"} number={2}  />
                  <Card tittle={"Tittle03"} number={8}  />
                  <Card tittle={"Tittle01"} number={20}  />
                </div>
      
            </div>
        </section>

        <DrBeep />
      </div>
  )
}

export default Market