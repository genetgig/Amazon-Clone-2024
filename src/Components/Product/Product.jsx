import React, { useEffect, useState } from "react";
import axios from "axios";
import  {ProductUrl} from "../../Api/EndPoint"
import ProductCard from "./ProductCard";

import Loder from "../Loder/Loder";
const Product = () => {
  const [products, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${ProductUrl}/products`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <section className="max-w-screen-2xl max-auto w-[90%] mx-auto grid grid-cols-1 gap-5 mt-10 px-auto  md:grid-cols-2 md:w-[80%] lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Product;




