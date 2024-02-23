import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Cart from './Pages/Cart/Cart'
import Payment from './Pages/Payment/Payment'
import Order from './Pages/Orders/Order'
import Result from './Pages/Results/Result'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe('pk_test_51OkL72HvcliTvSc8OWWHVcis5Rbo61rlubNF25kr1gVeCq63n1Klauzc2PjuuDZuRn1CX69CwpVHwV6SJDXzx1VQ00tsdNlGet');

const Routing = () => {
  return (
    <Router>
   
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/payment' element={
              <ProtectedRoute msg={"you must login to pay"} redirect={"/payment"}>
                  <Elements stripe={stripePromise}>
              <Payment/>
            </Elements>
              </ProtectedRoute>
          
            } />
            <Route path="/orders" element={
            <ProtectedRoute 
            msg={"you must login to access your orders"} redirect={"/orders"}>
           <Order/>
        </ProtectedRoute>
            } />
            <Route path='/category/:categoryName' element={<Result/>} />
            <Route path='/products/:productId' element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </Router> 

  )
}

export default Routing
