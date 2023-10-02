import React, { useState } from "react";
import ig from "../assets/images/ig.png"
import gm from "../assets/images/gm.avif"
import tw from "../assets/images/tw.png"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");

  const handleConnectClick = () => {
    const email = "batemanp313@gmail.com";
    const subject = name; // Use the 'name' as the subject
    const body = `Queries: ${queries}\nEmail: ${email}`; // Include queries and email in the body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input
                type="text"
                placeholder="Your Queries"
                value={queries}
                onChange={(e) => setQueries(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="contact now"
              class="btn"
              onClick={handleConnectClick}
            />
          </form>
        </div>

        {/* Logos and links */}
        <div class="social-links">
          <a
            href="https://www.instagram.com/khaass_khaass_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ig} alt="Instagram Logo" style={{ width: '35px', height: '30px' }}/>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tw} alt="Twitter Logo"  style={{ width: '70px', height: '35px' }} />
          </a>
          <a href="https://mail.google.com">
            <img src={gm} alt="Gmail Logo" style={{ width: '60px', height: '30px' }}/>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
