import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUES } from "../store/productSlice";

const Product = () => {
  //   const [apidata, setApiData] = useState([]);
  const dispatch = useDispatch();
 
  const { data: products , status } = useSelector((items) => items.product);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchData = async () => {
    //   const url = await fetch(`https://fakestoreapi.com/products`);
    //   const data = await url.json();
    //   setApiData(data);
    // };

    // fetchData();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };


if(status === STATUES.LOADING){
    return <h2>Loading...</h2>
}else if(status === STATUES.ERROR){
    return <h2>SomeThing went wrong..</h2>
}

  return (
    <div className="productsWrapper">
      {products?.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
