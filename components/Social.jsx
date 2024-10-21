import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/xze0011?tab=repositories" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/xiangming-zeng-732b521a4/"
  }
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
