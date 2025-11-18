import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="top-bar-section">
        <div className="top-bar-block">
          <span className="icon-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.14736 10.9618H0.499983C0.223993 10.9618 0 11.1858 0 11.4618C0 11.7378 0.223993 11.9618 0.499983 11.9618H10.9746C11.2506 11.9618 11.4746 11.7378 11.4746 11.4618C11.4746 11.1858 11.2506 10.9618 10.9746 10.9618H6.0958L13.642 2.38209C14.1575 1.79611 14.11 0.905643 13.5351 0.37816L13.5346 0.37766C13.2521 0.118669 12.8776 -0.016826 12.4946 0.00167342C12.1116 0.0201728 11.7521 0.191166 11.4956 0.476157L5.14133 7.54692L2.63791 5.04301C2.34742 4.75302 1.95094 4.59452 1.54045 4.60552C1.12996 4.61652 0.741974 4.79551 0.467483 5.101L0.382987 5.195C-0.147996 5.78648 -0.123996 6.69045 0.437985 7.25243L4.14736 10.9618Z"
                fill="#E8EEFB"
              />
            </svg>
          </span>
          <span className="text-block">Gratis inmeetservice</span>
        </div>
        <div className="top-bar-block">
          <span className="icon-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.14736 10.9618H0.499983C0.223993 10.9618 0 11.1858 0 11.4618C0 11.7378 0.223993 11.9618 0.499983 11.9618H10.9746C11.2506 11.9618 11.4746 11.7378 11.4746 11.4618C11.4746 11.1858 11.2506 10.9618 10.9746 10.9618H6.0958L13.642 2.38209C14.1575 1.79611 14.11 0.905643 13.5351 0.37816L13.5346 0.37766C13.2521 0.118669 12.8776 -0.016826 12.4946 0.00167342C12.1116 0.0201728 11.7521 0.191166 11.4956 0.476157L5.14133 7.54692L2.63791 5.04301C2.34742 4.75302 1.95094 4.59452 1.54045 4.60552C1.12996 4.61652 0.741974 4.79551 0.467483 5.101L0.382987 5.195C-0.147996 5.78648 -0.123996 6.69045 0.437985 7.25243L4.14736 10.9618Z"
                fill="#E8EEFB"
              />
            </svg>
          </span>
          <span className="text-block">
            Eigen productie
            <span>
              <img src="/assets/images/footer-logo.png" alt="Elzza Logo" />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default TopBar;
