import React, { useContext, useState, useEffect } from "react";
import classes from "./Order.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/Dataprovider";
import ProductCard from "../../Components/Product/ProductCard";

const Order = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot)
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        });
    } else {
      setOrders([])
    }
  }, []);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {
            orders?.length === 0 && <div className="p-2">
              You don't have orders yet.</div>
          }
          {/* orderd items */}
          <div>
            {
              orders?.map((eachOrder, i)=>{

                return (
                  <div key={i}>
                    <hr />
                    <p>Order ID: {eachOrder?.id}</p>
                    {
                      eachOrder?.data?.basket?.map(order => {
                       return <ProductCard 
                        flex={true}
                        product={order}
                        key={order.id}
                        />
                      })
                    }
                  </div>

                )
              })
            }
          </div>
          
        </div>
      </section>
    </LayOut>
  );
};

export default Order;
