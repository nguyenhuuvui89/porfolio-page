import React, { useState, useEffect, useRef } from "react";
import son from '../assets/pic/IMG_8999.jpg';
import son1 from '../assets/pic/IMG_3738.jpg';
import binz from '../assets/pic/bi2.jpg';
import mint from '../assets/pic/Mint.jpeg';
import mint1 from '../assets/pic/IMG_3522.jpg';
// import vincent from '../assets/pic/vincent.jpeg';
import mintp from '../assets/pic/MintP.jpeg';
import food1 from '../assets/pic/da nang.jpg';
import food2 from '../assets/pic/village.jpg';
import food3 from '../assets/pic/ha long.jpg';
import fami from '../assets/pic/IMG_2427.jpg';
import food5 from '../assets/pic/IMG.jpg';
import mb from '../assets/pic/IMGmb.jpg';
import nl1 from '../assets/pic/erik-mclean-2.jpg';
import nl2 from '../assets/pic/erik-mclean-4.jpg';
import nl3 from '../assets/pic/erik-mclean-3.jpg';



import { Link } from "react-router-dom";



const Projects = () => {
  const images = [ mintp,son, son1, binz, mint1];
  const imgArrLen = images.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryBoxRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const intervalRef = useRef(null);

  // Move image function
  const moveImage = (index) => {
    if (galleryBoxRef.current) {
      galleryBoxRef.current.style.left = `${-galleryBoxRef.current.children[index].offsetLeft}px`;
    }
    setCurrentIndex(index);
  };

  // Right arrow click handler
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 <= imgArrLen ? prevIndex + 1 : 0));
  };

  // Left arrow click handler
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : imgArrLen));
  };

  // Auto-slide functionality
  useEffect(() => {
    moveImage(currentIndex);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => rightArrowRef.current.click(), 3000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  return (
    <main className="main_fa">
      <section className="family_v">
        <div className="title">
          <h2><span>My life's navigation.</span></h2>
          <p>
            <span>As featured in </span>
            <span>| Family</span>
            <span> World Travel</span>
            <span> Cuisine</span>
          </p>
        </div>
        <div className="abum">
          <div className="ptext">
            <p className="shared-text">
              I am a proud husband and father of two wonderful children named William and Sophia.
              We are living in SugarLand, Texas.
            </p>
          </div>
          <div className="gallery">
            <div className="images" ref={galleryBoxRef} style={{ display: "flex", transition: "left 0.5s ease-in-out" }}>
              {images.map((img, index) => (
                <figure key={index} className="item">
                  <img className="kid" src={img} alt={`Family photo ${index + 1}`} />
                  <figcaption>{`Fig.${index + 1} - ${index % 2 === 0 ? 'Kids' : 'Kids'}`}</figcaption>
                </figure>
              ))}
            </div>
            <div className="buttons">
              <button id="left-arrow" ref={leftArrowRef} onClick={handlePrev}>
                <i className="fa-solid fa-angles-left fa-xl"></i>
              </button>
              <button id="right-arrow" ref={rightArrowRef} onClick={handleNext}>
                <i className="fa-solid fa-angles-right fa-xl"></i>
              </button>
            </div>
            <ul className="dot-bar">
              {images.map((_, index) => (
                <li
                  key={index}
                  className={index === currentIndex ? "act" : ""}
                  onClick={() => moveImage(index)}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="interest">
        <h2><span>Hobbies</span></h2>
        <p className="shared-text">
          I enjoy exploring new places and trying new foods with my family. 
          We love cooking.
        </p>
        <div className="interest_pic">
          <img src={food5} alt="Food" />
          <img src={fami} alt="Relax" />
          <img className="vertical" src={mb} alt="Travel" />
        </div>
      </section>
      <section className="interest">
        <h2><span>Viet Nam</span></h2>
        <p className="shared-text">
          Where I grew up.
        </p>
        <div className="interest_pic">
          <img src={food1} alt="Food" />
          <img src={food2} alt="Relax" />
          <img src={food3} alt="Travel" />
        </div>
      </section>
      <section className="interest">
      <h2><span>St John's</span></h2>
        <p className="shared-text">
          Where I lived in Canada.
        </p>
        <div className="interest_pic">
          <img src={nl1} alt="Food" />
          <img src={nl2} alt="Relax" />
          <img src={nl3} alt="Travel" />
        </div>
      </section>

      <div className="contact-me"style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '7rem'}}>
        <h2>Get In Touch</h2>
        <p className="mes">
        I love connecting! Whether for work or just to chat, feel free to reach out!
        </p>
        <Link to="/contact" className="btn_2">
            Contact Me
        </Link>
      </div>
    </main>
  );
};

export default Projects;
