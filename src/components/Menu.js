import React from "react";
import { menu } from "../Data";

const Menu = () => {
  const menuItems = [
    "Latte",
    "Cappuccino",
    "Mocha",
    "Chocolate",
    "Cola",
    "Juice",
    "Iced Tea",
    "Iced Latte",
  ];

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.img} alt="" />
              <h3>{menuItems[index]}</h3>
              <div className="price">
              ₹{((index + 1) * 50).toFixed(2)}{" "}
                <span>${((index + 1) * 7).toFixed(2)}</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
