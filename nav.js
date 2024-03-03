import React from "react";
import "./nav.css";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

const Nav = () => {
  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="search_box">
            <button className="button">
              <IoSearchOutline />
            </button>
            <input type="text" placeholder="SEARCH"></input>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/" className="link"></Link>
                </li>
                <li>
                  <Link to="/categories" className="link">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/builders" className="link">
                    Website Builders
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="link">
                    Today's Deals
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mid_header">
          <div className="info">
            <p>Best Website Builders In The US</p>
          </div>
        </div>
        <div className="last_header">
          <div className="line">
            <p>
              ________________________________________________________________________________________________
            </p>
            <button className="button">
              <IoIosCheckmarkCircleOutline />
            </button>
            <div className="info">
              <p>Last Updated - 20 February 2020</p>
            </div>
            <button className="button">
              <CiCircleInfo />
            </button>
            <div className="info">
              <p>Advertising Disclosure</p>
            </div>
            <p>
              ________________________________________________________________________________________________
            </p>
          </div>
        </div>
        <div className="end_header">
        <div className="navi">
              <ul>
                <li>
                  <Link to="/" className="link">Tools</Link>
                </li>
                <li>
                  <Link to="/categories" className="link">
                    AWS Builder
                  </Link>
                </li>
                <li>
                  <Link to="/builders" className="link">
                    Start Build
                  </Link>
                </li>
                <li>
                  <Link to="/supplies" className="link">
                    Build Supplies
                  </Link>
                </li>
                <li>
                  <Link to="/tooling" className="link">
                    Tooling
                  </Link>
                </li>
                <li>
                  <Link to="/hosting" className="link">
                    BlueHosting
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
