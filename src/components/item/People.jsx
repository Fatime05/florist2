import React from 'react'
import style from './People.module.css'
function People() {
  return (
    <div className={style.container}>
    <div className={style.item}> 
    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png" alt="" />
    <div className={style.text}>
    <h3>100% Freshness</h3>
    <span>Most people are unaware of the less common flower</span>
    </div>
    </div>

    <div className={style.item}> 
    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png" alt="" />
    <div className={style.text}>
    <h3>Made by artist</h3>
    <span>Most people are unaware of the less common flower</span>
    </div>
    </div>

    <div className={style.item}> 
    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png" alt="" />
    <div className={style.text}>
    <h3>Own courier</h3>
    <span>Most people are unaware of the less common flower</span>
    </div>
    </div>

    <div className={style.item}> 
    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png" alt="" />
    <div className={style.text}>
    <h3>100% Freshness</h3>
    <span>Most people are unaware of the less common flower</span>
    </div>
    </div>

    
</div>
  )
}

export default People