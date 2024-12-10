import React from 'react'
import style from './Herosection.module.css'
const Herosection = () => {
  return (
    <div className={style.mainsection}>
        <div className={style.textcontainer}>
            <h5>FRESH FLOWER & GIFT SHOP</h5>
            <span>Making beautiful <br/> flowers a part of <br/> your life</span>
            <button className={style.btn}>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Herosection