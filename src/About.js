import React from "react";
import { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import martha from "./martha.jpeg"
import natalija from "./profilePic.jpeg"
import vida from "./vida.jpeg"

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    // return <p>This app was built by Martha Quintanilla-Ramirez, Natalija Germek, Vida Powell</p>
    return <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>This App is brought to you by: Martha Quintanilla-Ramirez </Accordion.Header>
        <Accordion.Body id="marthacolor">
          <div>
            <img src={martha} alt="" height={100}/> 
          </div>
          My name is Martha Quintanilla-Ramirez; I’m 28 years old. I am a software developer with a finance background in Seattle, WA! Before switching careers, I worked for a credit union where I was a Retail Experience Support Specialist. I assisted over 100 personal bankers where I utilized my problem-solving skills and attention to detail with complex transactions. While this field has taught me a lot and has been rewarding, I wanted shift careers and become a software developer to challenge myself. I want to showcase that I can succeed in the tech world and break down any myths/stereotypes regarding females in the tech industry. It is important to me to bring diversity to any team I work with to empower people from all walks of life. Technology is evolving rapidly, and I want to be a part of the growth and contribute in any way I can. 
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>This App is brought to you by: Natalija Germek </Accordion.Header>
      <Accordion.Body id="natalijacolor"> 
        <div className="photos">
        <img src={natalija} alt="" height={200} /> 
        </div>
        Natalija is currently a Financial Center Manager and has spent the last 16 years within the banking industry. An avid nature lover, Natalija presently lives in the mountains of Canada and is always up for an adventure to explore anything from the hot springs to the ice caves. Her passion for puzzles and drive to solve problems has led her to pursue a career in software development by studying at Code Fellows for a certificate in Full-Stack Python Development. 
      </Accordion.Body>
    </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>This App is brought to you by: Vida Powell </Accordion.Header>
      <Accordion.Body id="vidacolor"> 
      <div className="photos">
        <img src={vida} alt="" height={100} /> 
        </div>
      Presently a pandemic-inspired K-2 homeschool teacher and long-time Trekkie, Vida is an avid fan of puppies of all ages and life in VR. Having completed her Bachelor of Science in Interdisciplinary Studies (English/Mathematics), Associate of Science in pure sciences, and a bartending certification back when she enjoyed leaving the house, she is currently working toward an Advanced Software Development certification in Full-Stack JavaScript.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>

  }
};

export default Profile;
