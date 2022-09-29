import React, { useEffect, useState } from "react";
import { getStoredTime } from "../../utilites/timeDB";
import Activites from "../Activities/Activites";
import UserActivity from "../UserActivity/UserActivity";
import "./StudyPlan.css";

const StudyPlan = () => {
  
  const [activities, setactivities] = useState([]);
  const [studyTime, setStudyTime] = useState([])

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setactivities(data));
  }, []);


useEffect(() =>{
  const storedTime = getStoredTime()
  console.log(activities)

  for(const id in storedTime){
    // console.log( id)


    const addedTime = activities.find(activity => {
      
     return activity.id == id
      // activity.id === id
    })

    console.log(addedTime)
    
    const saveTime = []
    
    if(addedTime){
      const timebreak = storedTime[id]
      // addedTime.time = timebreak
        

      saveTime.push(addedTime)
      console.log(addedTime)
    } else {
      console.log('not working')
    }

    console.log(saveTime)


  }
}, [activities])

  const addToList = (activity) => {
    let newStudyTime = [...studyTime, activity]
    setStudyTime(newStudyTime)


  };

  return (
    <section className="studySection">
      <div className="studyPlan-container">
        <h1>Select your Study plan {activities.length}</h1>

        <div className="activity-container">
          {activities.map((activity) => (
            <Activites
              key={activity.id}
              activity={activity}
              addToList={addToList}
            />
          ))}
        </div>
      </div>

      <div className="studyClac-container">
        <UserActivity studyTime={studyTime} activities={activities} />



        
      </div>
    </section>
  );
};


export default StudyPlan;
