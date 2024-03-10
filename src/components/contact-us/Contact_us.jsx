import React, { useEffect, useRef } from "react";
import "./Contact_us.css";


const Contact_us = () => {
  let send=useRef()
  let reset=useRef()
  useEffect(()=>{

  },[])
  let Sending =(e)=>{
    send.current.innerText="sending...."
    e.target.reset()
    

    setTimeout(()=>{
      send.current.innerText="Message sent successfully!"
      
    },3000)
    
    e.preventDefault()
    
    

  }
  return (
    <div className="contact-us">
      <div className="contact-col">
        <h3>Send Us Message <i class="fa-solid fa-envelope"></i></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut
          adipisci ipsum perferendis ad, delectus voluptate consequuntur quis
          soluta nobis doloribus possimus explicabo totam modi molestiae
          corporis quaerat enim labore.
        </p>
        <ul>
            <li><i class="fa-regular fa-envelope"></i>&nbsp; prashanthprince929@gmail.com</li>
            <li><i class="fa-solid fa-phone"></i>&nbsp; +91 123-456-7890</li>
            <li>77 Cambridge California
            <br />
            United States
            </li>
        </ul>
        </div>
        <div className="form">
            <form onSubmit={Sending} method="post" className="form-info">
                <label id="label3">Name</label>
                <input type="text" name="name" placeholder="Enter Your Name"  />
                <label id="label1" htmlFor="">Phone&nbsp;Number</label>
                <input type="phone" name="phone" placeholder="Enter Your Mobile Number" />
                <label id="label2" htmlFor="">Write&nbsp;your&nbsp;message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                <button className="btn d-btn more hoverr">Submit&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>




            </form>
            <span ref={send}></span>
        </div>
      </div>
    
  );
};

export default Contact_us;
