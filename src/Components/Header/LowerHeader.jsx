import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from './Header.module.css'
import { MdOutlineAccountCircle } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import SideNav from './SideNav';
import {motion} from 'framer-motion'

const LowerHeader = () => {
  const ref= useRef()
  const [sideBar, setSideBar]=useState(false)
  useEffect(()=>{
    document.body.addEventListener('click', (e)=>{
      if(e.target.contains(ref.current)){
        setSideBar(false)
      }
    })
  }, [ref, sideBar])
  return (
    <div className={classes.lower__container}>
      <ul className='flex list-none gap-2'>
        <li onClick={()=>setSideBar(true)} className='flex gap-1 items-center'>
            <AiOutlineMenu/>
            <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
      {
        sideBar && (
          <div className='w-full h-screen text-black absolute top-0 left-0 bg-amazone_blue bg-opacity-50 '>
            <div className=' absolute z-10 w-full  h-full'>
              <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className='w-[350px] h-full bg-white border border-black'>
                <div className='w-full bg-amazone_light text-white py-2 px-6 flex gap-4'>
              <MdOutlineAccountCircle size={35} />
              <h3 className=' font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
              </div>
              
              <SideNav title="Digital Content & Devices" one="Amazone Music" two="Kindle E-readers & Books" three="Amazon Appostore"/>
              <SideNav title="Shope by Department" one="Electronics" two="Computers" three="Smart Home"/>
              <SideNav title="Programs & features" one="Gift cards" two="Amazone live" three="International Shopping"/>
              <SideNav title="Help & Settings" one="Your Account" two="Customer Service" three="Sign In"/>
              <span onClick={()=>setSideBar(false)} className=' cursor-pointer absolute top-0 left-[350px] w-10 h-10 text-white flex items-center justify-center border border-transparent  hover:bg-red-500 hover:text-white duration-300'><CgClose size={35} /></span>
            </motion.div>
             
          </div>
          </div>
        )
      }
      
    </div>
  )
}

export default LowerHeader
