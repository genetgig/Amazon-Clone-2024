import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/EndPoint";
import ProductCard from "../../Components/Product/ProductCard";
import Loder from "../../Components/Loder/Loder";
const Result = () => {
  const [results, setResults] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoding(true);
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoding(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoding(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 className=" p-[30px]">Results</h1>
        <p className=" p-[30px]">Category /{categoryName}</p>
        <hr />
        {isLoding ? (
          <Loder />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product}
              renderDesc={false} 
              renderAdd={true}/>
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Result;
