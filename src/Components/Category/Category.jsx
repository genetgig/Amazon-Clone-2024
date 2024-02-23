import React from 'react'
import {categoryInfos} from './CategoryFullInfo'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'
const Category = () => {
  return (
    <section className={classes.category__container}> 
      {
        categoryInfos.map((infos)=>{
          return  <CategoryCard key={infos.title} data={infos}/>
        })
      }
    </section>
  )
}

export default Category
