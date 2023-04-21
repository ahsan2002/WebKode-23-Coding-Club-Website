import React from 'react'
import './TeamCard.css';
import { FiFacebook ,FiInstagram,FiLinkedin} from "react-icons/fi";

const TeamCard = () => {
  return (
    <>
        <div class="team_card">
          <div className="circle">
              <img className='team_img' src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/47d488474b1750ad8f9a684f/fggf.jpg" alt="" />
          </div>

          <div className='team_content'>
                <h3>Ahsan Omerjee</h3>
                <h5>President</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, eligendi? Sit, impedit unde quod adipisci esse possimus ipsum! Eum harum perferendis hic facilis. Nihil, atque.</p>
                <div className="icons">
                  <div><FiFacebook size={23}  color='#b83ce4'/></div>
                  <div><FiInstagram size={23} color='#b83ce4' /></div>
                  <div><FiLinkedin size={23} color='#b83ce4' /></div>
                </div>
          </div>
        </div>
    </>
  )
}

export default TeamCard