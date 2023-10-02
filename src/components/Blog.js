import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
         <span>Gallery</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  
                </a>
                <span></span>
                <p>
                  
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
