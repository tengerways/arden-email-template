// src/components/Sidebar.js
import React from 'react';
import 'boxicons';
import { Link } from 'react-router-dom';
import ProfileImg from '../../src/assets/images/profile-img.svg'
import { useNavigate } from 'react-router-dom'

const { useState, useEffect } = React

const Sidebar = ({ percent }) => {

  const navigate = useNavigate();

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
  };
  let menuItems = [
    {
      name: "Tengerways",
      iconName: "menu",
      color: "#041c74",
      type: "solid",
    },
    {
      name: "Dashboard",
      iconName: "home",
      color: "#041c74",
      type: "solid",
      path: "/dashboard",
    },
    {
      name: "Manage Emails",
      iconName: "envelope",
      color: "#041c74",
      type: "solid",
      path: "/manage-emails",
    },
    {
      name: "Log Out",
      iconName: "log-out",
      color: "#041c74",
      rotate: "180",
    },
  ];
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(true);
  let delay = 1;
  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active, delay]);

  const inlineStyle = {
    '--percent': '70'
  };

  return (
    <div className={`sidebar ${expanded && "expanded"}`}>
      <div className='d-flex align-items-center justify-content-center w-100 py-4'>
        <div className="profile-area">
          <div className="percent">
            <svg>
              <circle cx="47.5" cy="47.5" r="45"></circle>
              <circle cx="47.5" cy="47.5" r="45" style={inlineStyle}></circle>
            </svg>
            <div className="number">
              <img src={ProfileImg} alt="Profile" className="profile-image" />
            </div>
          </div>
          <div className="title">
            <h2>Jason Morison</h2>
          </div>
        </div>
      </div>
      {menuItems.map((item, index) => {
        let middle = false;
        if (!(index === 0 || index === menuItems.length - 1)) {
          middle = true;
        }
        return (
          <div
            className={`boxicon-container ${
              expanded && "expanded-boxicon-container"
            }`}
            onMouseEnter={() => {
              if (middle) {
                setHovered(index);
              }
            }}
            onMouseLeave={() => {
              if (middle) {
                setHovered(null);
              }
            }}
            // onClick={() => {
            //   if (middle) {
            //     setActive(index);
            //   }
            //   if (index === 0) {
            //     setExpanded(!expanded);
            //   }
            // }}
            key={index}
            onClick={() => navigate(item.path)}
          >
                <box-icon
                class={`${middle && "boxicon"} 
                        ${!middle && "first-and-last-trash-fix"}
                        ${active === index && "active"}
                        `}
                name={item.iconName}
                type={item.type}
                color={
                    hovered === index ? "white" : item.color || active === index ? "#041c74" : item.color
                }
                animation={active === index && animate ? "tada" : ""}
                rotate={item.rotate}
                ></box-icon>
                <p
                className={`description 
                ${expanded && "show-description"}
                ${active === index && "active-description"}`}
                >
                {item.name}
                </p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
