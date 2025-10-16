import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CommonBtn from "../commonElement/CommonBtn";

const Navbar = () => {
  const navbarRef = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsNavOpen(false);
  }, []);
  return (
    <nav
      className={`navbar top-navbar sticky-top navbar-expand-lg ${
        isScrolled ? "" : ""
      }`}
      // className={`navbar top-navbar sticky-top navbar-expand-lg ${
      //   isScrolled ? "scrolled" : "transparent"
      // }`}
      ref={navbarRef}
    >
      <div className="el-container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between">
          <Link href="/" className="navbar-brand border-0">
            <Image
              src="/assets/images/logo.svg"
              width={94}
              height={48}
              alt="logo"
              priority
            />
          </Link>
          <button
            className={`navbar-toggler ${isNavOpen ? "open" : ""}`}
            type="button"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                viewBox="0 0 19 16"
              >
                <g transform="translate(-325 -17)">
                  <rect
                    width="19"
                    height="2"
                    rx="1"
                    transform="translate(325 31)"
                    fill="#fbfbfb"
                  />
                  <rect
                    width="15"
                    height="2"
                    rx="1"
                    transform="translate(329 24)"
                    fill="#fbfbfb"
                  />
                  <rect
                    width="19"
                    height="2"
                    rx="1"
                    transform="translate(325 17)"
                    fill="#fbfbfb"
                  />
                </g>
              </svg>
            </span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav left-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Product</span>
                  <span className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5306 6.53063L8.5306 11.5306C8.46092 11.6005 8.37813 11.656 8.28696 11.6939C8.1958 11.7317 8.09806 11.7512 7.99935 11.7512C7.90064 11.7512 7.8029 11.7317 7.71173 11.6939C7.62057 11.656 7.53778 11.6005 7.4681 11.5306L2.4681 6.53063C2.3272 6.38973 2.24805 6.19864 2.24805 5.99938C2.24805 5.80012 2.3272 5.60902 2.4681 5.46813C2.60899 5.32723 2.80009 5.24808 2.99935 5.24808C3.19861 5.24808 3.3897 5.32723 3.5306 5.46813L7.99997 9.9375L12.4693 5.4675C12.6102 5.32661 12.8013 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5318 5.4675C13.6727 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6727 6.38911 13.5318 6.53L13.5306 6.53063Z"
                        fill="#000F42"
                      />
                    </svg>
                  </span>
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Services</span>
                  <span className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5306 6.53063L8.5306 11.5306C8.46092 11.6005 8.37813 11.656 8.28696 11.6939C8.1958 11.7317 8.09806 11.7512 7.99935 11.7512C7.90064 11.7512 7.8029 11.7317 7.71173 11.6939C7.62057 11.656 7.53778 11.6005 7.4681 11.5306L2.4681 6.53063C2.3272 6.38973 2.24805 6.19864 2.24805 5.99938C2.24805 5.80012 2.3272 5.60902 2.4681 5.46813C2.60899 5.32723 2.80009 5.24808 2.99935 5.24808C3.19861 5.24808 3.3897 5.32723 3.5306 5.46813L7.99997 9.9375L12.4693 5.4675C12.6102 5.32661 12.8013 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5318 5.4675C13.6727 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6727 6.38911 13.5318 6.53L13.5306 6.53063Z"
                        fill="#000F42"
                      />
                    </svg>
                  </span>
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Projects
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link" href="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav right-nav ms-auto">
            <li className="nav-item">
              <CommonBtn btnText="Get a Quote" link={"/"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
