import React from "react";
import AboutImg from "../assets/images/moto.jpeg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>Our Vision</h3>
            <p>
              At Khaass Khass, we envision revolutionizing the way people
              experience beverages. We strive to become a household name
              associated with exceptional quality, innovation, and unmatched
              taste. Our vision is to offer a diverse range of handcrafted
              shakes and beverages that cater to various palates and
              preferences, making every sip a delightful adventure.
            </p>
            <p>
              Our mission is to bring joy to our customers by providing them
              with an unparalleled beverage experience. We are committed to
              using the finest ingredients, perfecting our recipes, and infusing
              creativity into every drink we offer. Khaass Khass aims to foster
              a sense of community by promoting a space where people can come
              together, enjoy delectable drinks, and create beautiful memories.
            </p>
            <a href="#contact" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
