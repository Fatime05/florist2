import React from 'react'
import Header from '../../components/header/Header'
import Herosection from '../../components/herosection/Herosection'
import People from '../../components/item/People'
import Plant from '../../components/plant/Plant'

const Home = () => {
  return (
    <div>
      <Header/>
      <Herosection/>
      <People/>
      <Plant/>
    </div>
  )
}

export default Home