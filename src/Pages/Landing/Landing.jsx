import React from 'react'
import Carousel from '../../Components/Carousel/CarouselEffect'
import Category from '../../Components/Category/Category'
import LayOut from '../../Components/Layout/LayOut'
import Product from '../../Components/Product/Product'
import FootrTops from '../../Components/Footer/FootrTops'


const Landing = () => {
  return (
    <LayOut>
      <Carousel/>
      <Category/>
      <Product/>
      <FootrTops/>
    </LayOut>
  )
}

export default Landing
