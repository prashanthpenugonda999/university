import React from 'react'
import "./Programs.css"
import profile1 from "../../assets/profile.jpg"
import profile2 from "../../assets/degree1.jpg"
import profile3 from "../../assets/degree2.jpg"


const Program = () => {
    
  return (
    <div className='programs container'>
        <div className="program">
            <img id='img1' src={profile1} alt="" />
            <div className="caption">
            <i className="fa-solid fa-graduation-cap"></i>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={profile2} alt="" />
            <div className="caption">
            <i class="fa-solid fa-graduation-cap"></i>
                <p>Masters Degree</p>
            </div>
            
        </div>
        <div className="program">
            <img src={profile3} alt="" />
            <div className="caption">
            <i class="fa-solid fa-graduation-cap"></i>
                <p>Post Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Program