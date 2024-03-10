import React from "react";
import "./About.css";
import video_icon from "../../assets/video-icon.png"
import profile from "../../assets/degree2.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={profile} alt="photo" />
        <img className="about-icon" src={video_icon} alt="photo" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurtutring tomorrow's Teachers  Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos
          sit ab voluptas impedit aliquid voluptate, mollitia facilis,
          recusandae reprehenderit, expedita totam necessitatibus?
          Exercitationem tenetur debitis iure impedit eum neque! Fuga deserunt
          accusantium illo quae sunt corrupti<br></br><br></br> Aliquam tenetur, cum velit
          temporibus corporis quo iusto perspiciatis eum, quam cupiditate
          quisquam asperiores! Deleniti, soluta? Itaque voluptates veritatis
          aperiam necessitatibus, perferendis unde? Harum, adipisci voluptates
          dolorum autem fugiat repellendus<br></br> <br></br>velit quo non maxime asperiores
          pariatur? Mollitia quia vero nesciunt distinctio cupiditate qui
          aliquam, minima, ipsum laborum, consequatur reprehenderit porro
          doloremque eveniet delectus?
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
