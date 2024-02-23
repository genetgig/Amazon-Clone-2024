import React, { useContext } from "react";
import './Cart.css'
import LayOut from "../../Components/Layout/LayOut";
import { DataContext } from "../../Components/DataProvider/Dataprovider";
import ProductCard from "../../Components/Product/ProductCard";
import Currencyformat from "../../Components/CurrencyFormat/Currencyformat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment=(item)=>{
dispatch({
  type: Type.ADD_TO_BASKET,
  item
})
  }
  const decrement=(id)=>{
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
     id
    })
      }

  return (
    <LayOut>
      <section className="cart_container order-1 lg:flex justify-center gap-[20px] mt-[20] w-[80%] mx-auto ">
        <div className=" p-[20px] w-[100%] ">
          <h2 className=" font-bold p-[10px]">Hello</h2>
          <h3 className=" font-bold p-[10px]">Your shopping basket</h3>
          <hr className="m-[10px]" />
          {basket?.length == 0 ? (
            <p>Opps ! no item in your cart</p>
          ) : (
            basket?.map((item) => {
              return (
                <section className="flex gap-[10px] ">
                <ProductCard
                  key={item.name}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                  bg={false}
                />
                <div className=" flex flex-col items-center justify-center gap-[5px]">
                <button className="btn hover:bg-buttn_color" onClick={()=>increment(item)}><IoIosArrowUp size={25} /></button>
                <span className=" font-bold">{item.amount}</span>
                <button className="btn hover:bg-buttn_color"  onClick={()=>decrement(item.id)}><IoIosArrowDown size={25} /></button>
                </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className="mt-[5px]  p-[20px] w-[20 rem] md:w-[30rem]  h-[70%] flex flex-col items-center gap-[20px]  border-[1px] border-[#C1C1C1] bg-[#F2F1F1] divide-solid  rounded-[5px]">
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <Currencyformat amount={total} />
            </div>
            <span className=" flex gap-[20px]">
              <input type="checkbox" />
              <small> This order contains a gift</small>
            </span>
            <Link
              className=" text-center w-[100%] border-none bg-buttn_color rounded-[5px] px-1 py-2 no-underline text-black hover:bg-button_shade "
              to="/payment"
            >
              {" "}
              Continue to checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
