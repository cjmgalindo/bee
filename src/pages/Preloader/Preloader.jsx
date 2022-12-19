import React from 'react'
import s from './preloader.module.scss'
import imgBee from './assets/the_logo.png'

function Preloader() {
  return (
    <div className={s.PagePreloader}>
        <div className={s.containerLoader}>
            <img src={imgBee} />
            <p>Loading...</p>
            <div className={s.loader}>
                
            </div>
        </div>
    </div>
  )
}

export default Preloader