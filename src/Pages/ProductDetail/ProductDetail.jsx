import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/EndPoint";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/Layout/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import Loder from "../../Components/Loder/Loder";
const ProductDetail = () => {
  const { productId } = useParams();
  const [isLoding, setIsLoding] = useState(false);
  const [product, setProduct] = useState({});
  // console.log(productId);
  useEffect(() => {
    setIsLoding(true);
    axios
      .get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data)
        setIsLoding(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoding(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoding ? <Loder /> : <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true} />}
    </LayOut>
  );
};

export default ProductDetail;
