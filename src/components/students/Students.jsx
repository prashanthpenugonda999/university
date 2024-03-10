import React from "react";
import "./Students.css";
import profile1 from "../../assets/profile.jpg";
import profile2 from "../../assets/degree1.jpg";
import profile3 from "../../assets/degree2.jpg";
import { useRef } from "react";

const Students = () => {
  
 
  let ul = useRef()
  
  let tx=0

  const Forward=()=>{
    if(tx > -50){
      tx -= 25
      console.log(tx)
    }
    ul.current.style.transform=`translateX(${tx}%)`

  }
  const Backward=()=>{
    if (tx<0){
      tx +=25


    }
    ul.current.style.transform=`translateX(${tx}%)`
  }
  


  return (
    <div className="students">
      <div  onClick={Backward} className="left-btn">
      <i className="fa-solid fa-chevron-left "></i>

      </div>
      <div  onClick={Forward} className="right-btn">
      <i className="fa-solid fa-chevron-right "></i>
      </div>
      
      
      <div className="slider">
        <ul ref={ul}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={profile2} alt="" />
                <div>
                <h3>Prashanth</h3>
                <span>Wdusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae repudiandae earum numquam ut, itaque tenetur amet
                incidunt quasi dolorum non. Soluta eligendi ipsum inventore
                deleniti aspernatur. Perspiciatis similique quisquam doloremque.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={profile1} alt="" />
                <div>
                <h3>Prashanth</h3>
                <span>Wdusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae repudiandae earum numquam ut, itaque tenetur amet
                incidunt quasi dolorum non. Soluta eligendi ipsum inventore
                deleniti aspernatur. Perspiciatis similique quisquam doloremque.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={profile3} alt="" />
                <div>
                <h3>Prashanth</h3>
                <span>Wdusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae repudiandae earum numquam ut, itaque tenetur amet
                incidunt quasi dolorum non. Soluta eligendi ipsum inventore
                deleniti aspernatur. Perspiciatis similique quisquam doloremque.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={profile1} alt="" />
                <div>
                <h3>Prashanth</h3>
                <span>Wdusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae repudiandae earum numquam ut, itaque tenetur amet
                incidunt quasi dolorum non. Soluta eligendi ipsum inventore
                deleniti aspernatur. Perspiciatis similique quisquam doloremque.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Students;
