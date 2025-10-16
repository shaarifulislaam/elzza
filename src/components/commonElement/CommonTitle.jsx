import React from "react";

const CommonTitle = ({ subTitle, title, highLight, title2, desc }) => {
  return (
    <div className="common-title-block">
      <h5 className="sub-title">{subTitle}</h5>
      <h1 className="common-title">
        <span>{title}</span> <span className="highlight">{highLight}</span>
        <span>{title2}</span>
      </h1>
      {desc && <p className="desc">{desc}</p>}
    </div>
  );
};

export default CommonTitle;
