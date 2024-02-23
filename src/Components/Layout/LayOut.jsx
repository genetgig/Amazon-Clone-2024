import React from 'react'
import Header from '../Header/Header'
import Footr from '../Footer/Footr'

const LayOut = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footr/>
    </div>
  )
}

export default LayOut
