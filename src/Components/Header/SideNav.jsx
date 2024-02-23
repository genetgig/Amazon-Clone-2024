import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const SideNav = ({title, one, two, three}) => {
  return (
    <div className='py-1 border-b-[1px] border-b-gray-300'>
                <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>{title}</h3>
                <ul className=' flex-col text-sm'>
                  <li className=' flex items-center justify-between hover:bg-zinc-200 ml-4  cursor-pointer'>
                    {one}
                  <span >
                    <IoIosArrowForward />
                    </span>
                  </li>
                  <li className=' flex items-center justify-between hover:bg-zinc-200 ml-4 cursor-pointer'>
                    {two}
                  <span >
                    <IoIosArrowForward />
                    </span>
                  </li>
                  <li className=' flex items-center justify-between hover:bg-zinc-200 ml-4 cursor-pointer'>
                    {three}
                  <span >
                    <IoIosArrowForward />
                    </span>
                  </li>
                </ul>
              </div>
  )
}

export default SideNav
