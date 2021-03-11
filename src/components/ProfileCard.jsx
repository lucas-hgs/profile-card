import card from '../images/bg-pattern-card.svg';
import profilePicture from '../images/image-victor.jpg';

import '../styles/profilecard.css';

export function ProfileCard() {
  return(
    <div className="container">
      <div className="cards">  
        <img className="cardBackground" src={card} alt=""/>
        <img className="profilePicture" src={profilePicture} alt=""/>
      </div>

      <div className="userInfo">

      <span className="title">Victor Crest
        <span className="age">26</span>
      </span>

      <span className="lowerText">
        London
      </span>

      </div>

      <div className="socials">
        <ul>
          <li>
            <span className="title">80K</span>
            <span className="lowerText">Followers</span>
          </li>
          <li>
            <span className="title">803K</span>
            <span className="lowerText">Likes</span>
          </li>
          <li>
            <span className="title">1.4K</span>
            <span className="lowerText">Photos</span>
          </li>
        </ul>
      </div>
    </div>
  );
}