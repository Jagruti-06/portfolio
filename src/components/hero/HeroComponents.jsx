import React, { useEffect, useRef } from 'react';
import styles from "./hero.module.css";
import twitter from '../../assets/socialIcons/twitter.svg';
import resume from "../../assets/socialIcons/mail.svg";
import github from "../../assets/socialIcons/github.svg";
import instagram from "../../assets/socialIcons/instagram.svg";
import linkedin from "../../assets/socialIcons/linkedin.svg";
import SocialIcon from './SocialIcon';
import CurrentInfo from './CurrentInfo';
import gsap from 'gsap';

const HeroComponents = () => {
  const HeadingRef = useRef(null);
  const iconsRef = useRef(null);
  const heroContainer = useRef(null)
  const socialMediaLinks = [
    {
      icon: twitter,
      link: "",
      alt: 'Twitter Icon',
      className: styles.icon1
    },
    {
      icon: resume,
      link: 'mailto:jagrutichikhale99@gmail.com',
      alt: 'Mail Icon',
      className: styles.icon2
    },
    {
      icon: github,
      link: 'https://github.com/Jagruti-06',
      alt: 'GitHub Icon',
      className: styles.icon3
    },
    {
      icon: linkedin,
      link: 'https://www.linkedin.com/in/jagruti-chikhale-11454a249/',
      alt: 'LinkedIn Icon',
      className: styles.icon5
    },
    {
      icon: instagram,
      link: 'https://www.instagram.com/jagruti__chikhale',
      alt: 'Instagram Icon',
      className: styles.icon4
    },
  ];

  return (
    <div className={styles.heroContainer} ref={heroContainer}>
      <h2 ref={HeadingRef}>Hey ッ, I'm <span className={`${styles.underline} underline`}>Jagruti</span> a Software Developer <br />Hyderabad , India</h2>
      <div className={styles.socialIcons} ref={iconsRef}>
        {socialMediaLinks.map((link) => (
          <SocialIcon key={link.link} link={link.link} icon={link.icon} alt={link.alt} className={link.className} />
        ))}
      </div>
      <CurrentInfo />
    </div>
  );
};

export default HeroComponents;
