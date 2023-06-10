import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import img1 from "../assets/macbook.jpeg";
import img2 from "../assets/shoes.png";

const Home = () => {

  const dispatch = useDispatch();

  const productList = [
    {
      name: "Mac Book",
      price: "12000",
      id: "adiofuweoirufuyiosuifhiweuri",
      imgSrc: img1,
    },

    {
      name: "Black Shoes",
      price: "490",
      id: "sklnadwuirfhjkvflffj",
      imgSrc: img2,
    },
  ];

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({
      type: "addToCart",
      payload: options
    });
    dispatch({type: "calculatePrice"});
    toast.success("Added to Cart!");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          name={i.name}
          key={i.id}
          id={i.id}
          imgSrc={i.imgSrc}
          price={i.price}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
