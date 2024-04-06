import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type:'spring',duration:3}
  return (
    <div className='hero'>
      <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header/>
        <div className='the-best-ad'>
        <motion.div
        initial={{left:'238px'}}
        whileInView={{left:'8px'}}
        transition={{...transition,type:'tween'}}
        >
        </motion.div>
        <span>the best fitness club in the town </span>
        </div>
        {/* hero heading*/}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal live up your life to fullest
            </span>
          </div>
        </div>
        {/* figure*/}
        <div className='figures'>
          <div>
            <span>+140</span>
            <span>Expart coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>member joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Program</span>
          </div>
        </div>
        {/* Hero buttton */}
        <div className='hero-buttons'>
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join now</button>
        <motion.div 
          whileInView={{right:'2rem'}}
          transition={{transition}}
        className='heart-rate'>
          <img src={heart} alt=""/>
          <sapn>Heart rate</sapn><span>116 BPM</span>
        </motion.div>
        {/* Hero images*/}
        <img src={hero_image} alt="" className='hero-image'/>
        <img src={hero_image_back} alt="" className='hero-image-back'/>
        {/* calories */}
        <div className='calories'>
          <img src={Calories} alt=""/>
          <span>Calories Burned</span>
          <span>220 Kcal</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
