import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CommonBtn from "../commonElement/CommonBtn";

const Navbar = () => {
  const navbarRef = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const productItems = [
    {
      icon: "/assets/images/door-1.webp",
      icon_hover: "/assets/images/menu-1.gif",
      title: "Raamkozijnen",
      description:
        "Slank, Veilig, Energiezuinig, Verkrijgbaar in Verschillende Stijlen",
    },
    {
      icon: "/assets/images/door-2.webp",
      icon_hover: "/assets/images/menu-2.gif",
      title: "Deurkozijnen",
      description:
        "Elegante Ontwerpen die Kracht, Veiligheid en Stijl Combineren",
    },
    {
      icon: "/assets/images/door-3.webp",
      icon_hover: "/assets/images/menu-3.gif",
      title: "Schuifdeursystemen",
      description: "Breng Licht en Ruimte Binnen met Onze Premium Schuifdeuren",
    },
    {
      icon: "/assets/images/door-4.webp",
      icon_hover: "/assets/images/menu-4.gif",
      title: "Aangepaste Maten & Afwerkingen",
      description: "Kies Materialen, Handgrepen en Framekleuren",
    },
  ];

  const serviceItems = [
    {
      icon: "/assets/icons/consultation.svg",
      icon_hover: "/assets/icons/consultation.gif",
      title: "Consultation",
      description: "Expert Advice For Your Project Needs",
    },
    {
      icon: "/assets/icons/installation.svg",
      icon_hover: "/assets/icons/installation.gif",
      title: "Installation",
      description: "Professional Installation Services",
    },
    {
      icon: "/assets/icons/maintenance.svg",
      icon_hover: "/assets/icons/maintenance.gif",
      title: "Maintenance",
      description: "Regular Maintenance And Support",
    },
    {
      icon: "/assets/icons/warranty.svg",
      icon_hover: "/assets/icons/warranty.gif",
      title: "Warranty",
      description: "Comprehensive Warranty Coverage",
    },
  ];

  return (
    <nav
      className={`navbar top-navbar sticky-top navbar-expand-lg ${
        isScrolled ? "scrolled" : "transparent"
      }`}
      ref={navbarRef}
    >
      <div className="el-container d-flex justify-content-between align-items-center">
        <div className="for-mobile d-flex justify-content-between">
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
            <li
              className="nav-item dropdown-item-wrapper"
              onMouseEnter={() => handleDropdownToggle("products")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                >
                  <span>Producten</span>
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

                <div
                  className={`mega-menu ${
                    activeDropdown === "products" ? "show" : ""
                  }`}
                >
                  <div className="mega-menu-content">
                    {productItems.map((item, index) => (
                      <Link href="#" key={index} className="mega-menu-item">
                        <div className="mega-menu-icon">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="icon-default"
                          />
                          <img
                            src={item.icon_hover}
                            alt={item.title}
                            className="icon-hover"
                          />
                        </div>
                        <div className="mega-menu-text">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/gallery">
                Projecten
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                Over Ons
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav right-nav ms-auto">
            <li className="nav-item">
              <CommonBtn btnText="Offerte Aanvragen" link={"/get-quote"} />
            </li>
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isNavOpen ? "open" : ""}`}>
          <div className="menu-block">
            <ul className="menu-list">
              <li className="menu-item">
                <Link
                  className="menu-link"
                  href="/"
                  onClick={() => setIsNavOpen(false)}
                >
                  Home
                </Link>
              </li>

              {/* Products Mobile Dropdown */}
              <li className="menu-item mobile-dropdown">
                <button
                  className="menu-link mobile-dropdown-toggle"
                  onClick={() =>
                    handleDropdownToggle(
                      activeDropdown === "mobile-products"
                        ? null
                        : "mobile-products"
                    )
                  }
                >
                  <span>Producten</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      activeDropdown === "mobile-products" ? "rotated" : ""
                    }
                  >
                    <path
                      d="M13.5306 6.53063L8.5306 11.5306C8.46092 11.6005 8.37813 11.656 8.28696 11.6939C8.1958 11.7317 8.09806 11.7512 7.99935 11.7512C7.90064 11.7512 7.8029 11.7317 7.71173 11.6939C7.62057 11.656 7.53778 11.6005 7.4681 11.5306L2.4681 6.53063C2.3272 6.38973 2.24805 6.19864 2.24805 5.99938C2.24805 5.80012 2.3272 5.60902 2.4681 5.46813C2.60899 5.32723 2.80009 5.24808 2.99935 5.24808C3.19861 5.24808 3.3897 5.32723 3.5306 5.46813L7.99997 9.9375L12.4693 5.4675C12.6102 5.32661 12.8013 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5318 5.4675C13.6727 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6727 6.38911 13.5318 6.53L13.5306 6.53063Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div
                  className={`mobile-mega-menu ${
                    activeDropdown === "mobile-products" ? "show" : ""
                  }`}
                >
                  {productItems.map((item, index) => (
                    <Link
                      href="#"
                      key={index}
                      className="mobile-mega-item"
                      onClick={() => setIsNavOpen(false)}
                    >
                      <div className="mobile-mega-icon">
                        <Image
                          src={item.icon}
                          width={32}
                          height={32}
                          alt={item.title}
                        />
                      </div>
                      <div className="mobile-mega-text">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </li>

              <li className="menu-item">
                <Link
                  className="menu-link"
                  href="/gallery"
                  onClick={() => setIsNavOpen(false)}
                >
                  Projecten
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="menu-link"
                  href="/about"
                  onClick={() => setIsNavOpen(false)}
                >
                  Over Ons
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="menu-link"
                  href="/contact"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
