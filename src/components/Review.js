import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";

const reviews = [
  {
    name: "Chandra Prakash",
    text: "I ordered a banana shake and it was healthy and tasted so delicious.",
    rating: 4.5, // Rating out of 5
    img: review[0].img, // Assuming the image for Chandra Prakash is the first image in the 'review' array
  },
  {
    name: "Aman Singh",
    text: "The orange juice was a bit sour but overall experience was amazing.",
    rating: 4, // Rating out of 5
    img: review[1].img, // Assuming the image for Aman Singh is the second image in the 'review' array
  },
  {
    name: "Akshat Angrishi",
    text: "I had an Oreo shake and not only was it according to my budget but it was so tasty too.",
    rating: 4.5, // Rating out of 5
    img: review[2].img, // Assuming the image for Akshat Angrishi is the third image in the 'review' array
  },
];

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {reviews.map((item, index) => (
            <div className="box" key={index}>
              <img src={qouteImg} alt="" className="quote" />
              <p>{item.text}</p>
              <img src={item.img} className="user" alt="" />
              <h3>{item.name}</h3>
              <div className="stars">
                {Array.from({ length: item.rating }, (_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                {item.rating % 1 !== 0 && (
                  <i className="fas fa-star-half-alt"></i>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
