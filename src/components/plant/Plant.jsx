import React from 'react'
import style from './Plant.module.css'
const Plant = () => {
  return (
    <div className={style.container}>
        <div className={style.card}>
            {/* <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg" alt="" /> */}
            <button>Fresh Flower <br/> ( 25 items )</button>
        </div>
        <div className={style.card}>
            <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg" alt="" />
            <button>Fresh Flower <br/> ( 25 items )</button>
        </div>
        <div className={style.card}>
            <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg" alt="" />
            <button>Fresh Flower <br/> ( 25 items )</button>
        </div>
        <div className={style.card}>
            <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg" alt="" />
            <button>Fresh Flower <br/> ( 25 items )</button>
        </div>
    </div>
  )
}

export default Plant