import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
       data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a href='https://www.google.com' className="items">
        <FaInstagram className='icons' />
        </a>
        <a href='https://www.google.com' className="items">
        <CiFacebook className='icons' />
        </a>
        <a href='https://www.google.com' className="items">
        <FaLinkedin className='icons' />
        </a>
        <a href='https://www.google.com' className="items">
        <FaTwitter className='icons' />
        </a>
        <a href='https://www.github.com' className="items">
        <FaGithub className='icons' />
        </a>
        <a href='mailto:dilalhassan123@gmail.com' className="items">
        <SiGmail className='icons' />
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact