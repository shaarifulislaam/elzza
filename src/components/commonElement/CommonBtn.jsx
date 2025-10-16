import Link from "next/link";
import React from "react";

const CommonBtn = ({ btnText, btnIcon, link = "#", variant = "primary" }) => {
  return (
    <div className="common-btn-container">
      <Link
        href={link}
        className={`btn ${
          variant === "primary" ? "btn-primary" : "btn-secondary"
        }`}
      >
        <span className="btn-text">{btnText}</span>
        {btnIcon && <span className="icon">{btnIcon}</span>}
      </Link>
    </div>
  );
};

export default CommonBtn;
