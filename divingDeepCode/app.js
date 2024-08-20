import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=> {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="options-container">
        <ul className="options">
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}

const CourseCard =(props)=> {
  return (
    <div className="course-card">
      <span className="title">Title: {props.title}</span>
      <span>Ratings: {props.ratings}</span>
    </div>
  );
}

const Body =()=> {
  return (
    <div className="body-container">
      <CourseCard title="React" ratings={5} />
      <CourseCard title="Javascript" ratings={4} />
      <CourseCard title="JAVA" ratings={4} />
      <CourseCard title="HTML" ratings={4} />
      <CourseCard title="CSS" ratings={4} />
      <CourseCard title="ViewJS" ratings={4} />
    </div>
  );
}

const AppLayout =()=> {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
