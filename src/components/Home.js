import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const sprinkleContainer = document.querySelector(".sprinkles-container");

  // Create and append sprinkle elements
  for (let i = 0; i < 50; i++) {
    const sprinkle = document.createElement("div");
    sprinkle.className = "sprinkle";
    sprinkle.style.left = `${Math.random() * 100}%`;
    sprinkle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Vary animation duration
    sprinkleContainer.appendChild(sprinkle);
  }
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Khaass<span> khaass </span>
          </h3>
          <p>
            Welcome to Khaass Khass, a vibrant and innovative venture that
            brings a distinctive twist to the world of shakes and beverages.
            Our journey began with a simple idea: to create extraordinary,
            one-of-a-kind drinks that leave a lasting impression on our
            customers' taste buds.
          </p>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="btn" >
              Order Now
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#menu" style={{ fontSize: "20px" }}>
                  View Menu
                </a>
                <br ></br>
                <a href="https://www.instagram.com/khaass_khaass_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" style={{ fontSize: "20px" }}>
                  Contact Us
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="sprinkles-container"></div>
    </>
  );
};

export default Home;
