import React from 'react'
import "./footer.scss"
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <footer className="footer">
      <ContentWrapper>

        <ul className='menuItems'>
          <li className='menuItem'>Terms Of Use</li>
          <li className='menuItem'>Privacy Policy</li>
          <li className='menuItem'>About</li>
          <li className='menuItem'>Blog</li>
          <li className='menuItem'>FAQ</li>
        </ul>

        <div className="infoText">
          <p>
            Step into Movix, the pulse of movie magic!
            Unleash the power of ratings, dive into curated lists,
            and embark on a journey through genres. From classics to cutting-edge,
            find your perfect watch effortlessly.
            Movix: where every frame tells a story, and every rating paints a masterpiece
          </p>
        </div>

        <div className="socialIcons">
          <span className='icon'>
            <FaFacebookF />
          </span>
          <span className='icon'>
            <FaInstagram />
          </span>
          <span className='icon'>
            <FaTwitter />
          </span>
          <span className='icon'>
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>

    </footer>
  )
}

export default Footer