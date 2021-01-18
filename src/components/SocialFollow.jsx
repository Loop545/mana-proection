import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Icons
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

 //Styles
 import '../components/SocialFollow.scss'


export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>More about us on.</h3>
      <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  );
}