import React, { useState } from 'react'
import s from './home.module.scss'



import boxEnter from './assets/box_enter.png'
import logo from './assets/the_logo.png'
import btnGreen from './assets/button_01.png'
import btnBlue from './assets/button_02.png'
import iconOptions from "./assets/selector.png";
import { NavLink } from 'react-router-dom'


function Home() {
    const [value, setValue] = useState("https://test.google.com")

    function show(p) {
        setValue(p)
        console.log(p)
    }

    // let drown = document.querySelector('.drown');
    //     drown.onClick = function () {
    //         drown.classList.toggle('active')
    // }
  return (
    <div className={`${s.sectionHome} h-100 w-100 d-flex justify-content-center align-items-center`}>
        <div className={s.boxWelcome}>

            <img src={boxEnter} className={s.boxEnter}/>

            <img src={logo}  className={s.logo}/>

            <div className={s.content }>
                <h3>WELCOME....</h3>

                <div className={s.select} 
                onClick={(e)=>e.target.classList.toggle(s["activeSelectHome"])}>
                    <div className={s.boxInput}>
                        <p >{value}</p>
                        <img src={iconOptions} className={s.icon} />
                    </div>

                    <div className={s.option}>
                        <div onClick={()=>show('option 1')}>option 1</div>
                        <div onClick={()=>show('option 2')}>option 2</div>
                        <div onClick={()=>show('option 3')}>option 3</div>
                        <div onClick={()=>show('option 4')}>option 4</div>
                    </div>
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