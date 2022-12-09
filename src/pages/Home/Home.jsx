import React from 'react'
import s from './home.module.scss'



import boxEnter from './assets/box_enter.png'
import logo from './assets/the_logo.png'
import btnGreen from './assets/button_01.png'
import btnBlue from './assets/button_02.png'
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <div className={`${s.sectionHome} h-100 w-100 d-flex justify-content-center align-items-center`}>
        <div className={s.boxWelcome}>

            <img src={boxEnter} className={s.boxEnter}/>

            <img src={logo}  className={s.logo}/>

            <div className={s.content }>
                <h3>WELCOME....</h3>
                <div className={s.select}>

                </div>
                <div className={s.btns}>
                    <NavLink to={'/continents'}>
                        <button>
                            <img src={btnGreen} className={s.btn}/>
                            <p>SITE2001</p>
                        </button>
                    </NavLink>
                    <button>
                        <img src={btnBlue} className={s.btn}/>
                        <p>SITE2002</p>
                    </button>
                </div>
            </div>
        </div>

        <span>
            Tester001 | Build in 21/01/2002
        </span>
    </div>
  )
}

export default Home