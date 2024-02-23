import React, { useContext } from "react";
import { Rating } from "@mui/material";
// import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
import  "./Product.css";
import { Link } from "react-router-dom";
import Currencyformat from "../CurrencyFormat/Currencyformat";
import { DataContext } from "../DataProvider/Dataprovider";
import { Type } from "../../Utility/action.type";
const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  //  console.log(state)

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${
        flex ? 'product__flaxed' : ""
      } prodduct__card bg-white  h-auto border-[1px] border-gray-200  py-6 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4 `}
    >
      <div key={id}>
       
        <div className="w-full h-auto flex items-center justify-center px-4">
          <Link to={`/products/${id}`}>
            <img src={image} alt="" className="w-50 h-40 object-contain" />
          </Link>
        </div>
        <div className="flex items-center justify-between px-16 ">
          <div className="pt-2">
          <h3 className=" pb-2 font-semibold">{title?.substring(0, 25)}</h3>
            {renderDesc && <div className="max-w-[750px]">{description}</div>}
            <div className="flex justify-between w-[50%]">
             <Rating value={rating?.rate}
                  precision={0.1} />
              <small>{rating?.count}</small>
            </div>
            <div className="flex">
            
              <Currencyformat amount={price} />
            </div>
            {renderAdd && (
              <button
                className=" w-full font-titleFont font-medium text-base bg-gradient-to-tr from-buttn_color hover:to-button_shade active:bg-gradient-to-bl active:from-buttn_color active:to-yellow-200 py-1 rounded-md   "
                onClick={addToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
