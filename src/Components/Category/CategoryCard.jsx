import React from 'react'
import classes from './Category.module.css'
import { Link } from 'react-router-dom'
const CategoryCard = ({data}) => {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
            <h2 className=' font-extrabold'>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  )
}

export default CategoryCard
