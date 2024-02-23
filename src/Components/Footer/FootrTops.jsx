import React from 'react'
import { Link } from 'react-router-dom'

const FootrTops = () => {
  return (
    <div className='w-full bg-white py-6'>
      <div className='w-full border-t-[1px] border-b-[1px] py-8'>
        <div className='w-64 mx-auto text-center flex flex-col gap-.5'>
            <p className='text-sm'>See Personalised recommendations</p>
            <button className='w-full bg-buttn_color shadow-md rounded-md py-1 font-semibold cursor-pointer hover:bg-button_shade '><Link to="/auth">Sign-Up</Link>
                </button>
            <p className='text-xs mt-1'>New Customer? <span>Start here.</span></p>
        </div>
      </div>
    </div>
  )
}

export default FootrTops
