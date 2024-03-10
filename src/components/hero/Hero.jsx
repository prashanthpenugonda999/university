import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container ">
      <div className="hero-text">
        <h1> We Ensure Better Eduvation </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          alias totam itaque quibusdam atque inventore voluptatum architecto
          dolores, officia qui sed neque, doloremque accusamus laudantium
          provident cumque voluptates quas impedit. Vitae, quis voluptatem quae
          harum sapiente officia beatae provident neque, pariatur eius, nihil
          molestiae omnis consequuntur recusandae ipsa! Magnam reprehenderit
          nisi at sapiente iste hic voluptatibus veritatis expedita aspernatur
          labore? Magnam amet explicabo dolorum ex saepe commodi quibusdam
          maiores architecto accusantium autem, repudiandae, totam facilis ipsam
          quo aspernatur libero, alias at nihil beatae dignissimos! Excepturi
          saepe alias aliquam vitae ratione?
        </p>
        <Link to="students" offset={-120} smooth={true} duration={0}><button  className="btn hoverr">Explore More &nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button></Link>
      </div>
    </div>
  );
};

export default Hero;
