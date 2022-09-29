import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
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
        <h1 className="selectStudy">Select your {activities.length} Study plan</h1>

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



      {/* BLog section */}
      <article className="blogArticle">
       
       <Blog title='1. How does React Works' body='React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.' />

       <Blog title="2. Difference between props and state" body="The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components." />


       <Blog title="3. Use cases of useEffect" body="By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed we'll refer to it as our effect, and call it later after performing the DOM updates.f you have just made a new project using Create React App or updated to React version 18, you will notice that the useEffect hook is called twice in development mode." />

      </article>

      
    </section>





  );
};


export default StudyPlan;
