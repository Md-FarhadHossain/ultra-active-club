import React from "react";
import avatar from "../../assets/avatar.jpg";

const UserActivity = () => {
  return (
    <div>
      <div className="user-info">
        <div>
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
