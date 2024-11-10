"use client";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

import Link from "next/link";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/rdhohdyat" },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/ridho-hidayat-79a811290",
  },
  {
    icon: <FaYoutube />,
    link: "https://youtube.com/@ridhoohidayat?si=TYzz4KvGCjUtmnZk",
  },
  { icon: <FaTwitter />, link: "https://x.com/rdhohdyat" },
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
