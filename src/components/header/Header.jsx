import React from 'react'
import style from './Header.module.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="florist" />
      </div>
      <nav className={style.navbar}>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">PAGES</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      <div className={style.icon}>
      <CiSearch />
      <div className={style.wishlist}>
      <Link to='/Wishlist'>
      <CiHeart />
      </Link>
      <span className={style.count}>(05)</span>
      </div>
      <div className={style.bag}>
      <Link to='/Cart'>
      <FaShoppingBag />
      </Link>
      <div className={style.span}>
      <span className={style.count}>(01)</span>
      <span className={style.countt}>$65.0</span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Header