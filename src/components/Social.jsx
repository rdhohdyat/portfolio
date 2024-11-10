"use client";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

import Link from "next/link";

const socials = [
  { icon: <FaGithub />, link: "https://github.com" },
  { icon: <FaLinkedin />, link: "https://linkedin.com" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          {social.icon}
          
        </Link> 
      ))}
    </div>
  );
};

export default Social;
