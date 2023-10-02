import React from "react";
import { products } from "../Data";

const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {products.map((item, index) => (
            <div className="box" key={index}>
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>
                  {index === 0
                    ? "Banana Milkshake"
                    : index === 1
                    ? "Chocolate Milkshake"
                    : index === 2
                    ? "Strawberry Strawberry"
                    : ""}
                </h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  ₹150
                  <span>₹209</span> {/* You can update the discounted price as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
