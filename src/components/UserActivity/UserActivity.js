import React from "react";
import avatar from "../../assets/avatar.jpg";
import './UserActivity.css'

const UserActivity = ({studyTime}) => {

  console.log(studyTime)

  let totalTime = 0

  for(const activity of studyTime){
    totalTime = totalTime + activity.time
  }

  return (
    <div className="userDetails">
        {/* User info */}
      <div className="user-info">
        <div className="user-image">
          <img src={avatar} alt="avatar" />
        </div>

        <div>
            <h2><strong>Farhad Hossain</strong></h2>
            <p>Satkhira, Khulna, Bangladesh</p>
        </div>
      </div>



      {/* Add break */}
   
      <div className="addBreak">
        <div>10</div>
        <div>20</div>
        <div>30</div>
        <div>40</div>
        <div>50</div>
      </div>


      {/* Study Details */}
      <div className="studyDetails">
        <div>Study time: <span id="study_time">{totalTime} minute</span></div>
        <div>Break time: <span id="break_time">15 minute</span></div>
      </div>


      {/* Activity complete button */}
      <button>Activity Completed</button>
    </div>
  );
};

export default UserActivity;
