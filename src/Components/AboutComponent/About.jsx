import React from "react";
import "./About.css";


const About = () => {
  return (
    <>
      {/* page1 */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 col-md-4 col-sm-2 section1">
            <h5>WHO&nbsp;WE&nbsp;ARE</h5>
            <h1>
              {" "}
              Ingenuity and <br /> perfection, from <br /> ideation to creation!
            </h1>
          </div>

          <div className="col-4 col-md-4 col-sm-2 section2">
            <h5>OUR MISSION</h5>
            <p>
              {" "}
              Our mission is to create a platform where people <br/>  can come together
              to learn, grow, and compete in coding competitions. We believe
              that by providing <br/> a supportive and collaborative environment.
            </p>

            <div className="image">
              <img src='./Images/Mission.jpg' alt="" />
            </div>
          </div>

          <div className="col-4 col-md-4 col-sm-2 section3">
            <h5>OUR VISION</h5>
            <p>
              Our vision is to become the go-to destination for coding
              enthusiasts around the world. We want to create a platform that is
              accessible to everyone, regardless of their skill level or
              background.
            </p>

            <div className="image">
              <img src='./Images/Vision.jpg' alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* page2 */}
      <div className="container-fluid">
        <div class="row row2">

          <div class="col-6 ">

            <div className="image2">
              <img src='./Images/Vision.jpg' alt="" />
            </div>
          </div>


          <div class="col-6 choose">
             <h5>WHY CHOOSE US</h5>
             <h1>Unlock Your Potential With <br/> Our Innovative Software <br/> Solutions</h1>
             <p> We organizes a bunch of programming contests every month through the practice portal
              which includes a number of job-a-thons for freshers 
             to get hiring opportunities in a significant number of companies.</p>

             <h3>Bi-Wizard Coding</h3>
             <p>A coding competition exclusively for students. The top 100 students get chances 
             of winning exciting rewards and also access to free courses.</p>

             <h3>Problem Of The Day</h3>
             <p> A new problem every day to strengthen the base of data structure and algorithm.</p>

             <h3>24/7 Hours Support</h3>
             <p> For any questions or inquiries, our 24/7 support team is available to help - contact us anytime!</p>

          </div>

        </div>
      </div>
    </>
  );
};

export default About;
