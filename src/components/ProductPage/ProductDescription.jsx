import Link from "next/link";
import React from "react";
import CommonBtn from "../commonElement/CommonBtn";

const ProductDescription = ({ listItem, productDescTitle }) => {
  return (
    <div className="product-description-block">
      <div className="name">{productDescTitle}</div>
      <ul className="desc-list">
        {listItem?.map((item, index) =>
          !item.isBrochure ? (
            <li className="list-item" key={index}>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g clipPath="url(#clip0_401_924)">
                    <path
                      d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                      fill="#001149"
                    />
                    <path
                      d="M9.65527 14.2196L13.1035 17.3795L19.3104 11.5864"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_401_924">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span className="text">
                <span className="title">{item.title}</span>
                {item.desc && <div className="desc">{item.desc}</div>}
              </span>
            </li>
          ) : (
            // FIX: brochure also returned as <li>
            <li className="download-block" key={index}>
              <Link
                className="doc-link"
                href={item.href}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <path
                      d="M15.4662 17V12.9322H17.5001M16.8221 14.9661H15.4662M6.65263 17V12.9322M6.65263 12.9322H8.00856C8.57023 12.9322 9.02551 13.3875 9.02551 13.9491C9.02551 14.5108 8.57023 14.9661 8.00856 14.9661H6.65263V12.9322ZM7.60178 6.42382V10.4916M7.60178 10.4916L6.24585 9.13565M7.60178 10.4916L8.95772 9.13565M13.7035 10.4916V5.06787M12.0764 17H11.0594V12.9322H12.0764C12.8252 12.9322 13.4323 13.5393 13.4323 14.2881V15.644C13.4323 16.3929 12.8252 17 12.0764 17Z"
                      stroke="#1857D8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.6356 1H2.85593C2.10709 1 1.5 1.60708 1.5 2.35591V15.6439C1.5 16.3927 2.10709 16.9998 2.85593 16.9998H4.21187M9.6356 1V3.71183C9.6356 4.46067 10.2427 5.06774 10.9915 5.06774H13.7034L9.6356 1Z"
                      stroke="#1857D8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="doc-label">{item.title}</span>
              </Link>
            </li>
          )
        )}
      </ul>

      <CommonBtn
        btnText="Ontvang een gratis offerte"
        link="/get-quote"
        btnIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
          >
            <path
              d="M15.3508 7.22897L9.72578 12.854C9.54966 13.0301 9.31079 13.129 9.06172 13.129C8.81265 13.129 8.57378 13.0301 8.39766 12.854C8.22154 12.6778 8.12259 12.439 8.12259 12.1899C8.12259 11.9408 8.22154 11.702 8.39766 11.5258L12.4219 7.50319H0.9375C0.68886 7.50319 0.450403 7.40442 0.274587 7.2286C0.0987721 7.05279 0 6.81433 0 6.56569C0 6.31705 0.0987721 6.07859 0.274587 5.90278C0.450403 5.72696 0.68886 5.62819 0.9375 5.62819H12.4219L8.39922 1.60319C8.2231 1.42707 8.12416 1.1882 8.12416 0.939126C8.12416 0.690054 8.2231 0.451184 8.39922 0.275064C8.57534 0.0989432 8.81421 2.6244e-09 9.06328 0C9.31235 -2.6244e-09 9.55122 0.0989432 9.72734 0.275064L15.3523 5.90006C15.4398 5.98728 15.5091 6.0909 15.5563 6.20498C15.6036 6.31907 15.6278 6.44136 15.6277 6.56484C15.6275 6.68832 15.603 6.81056 15.5555 6.92453C15.508 7.0385 15.4384 7.14196 15.3508 7.22897Z"
              fill="white"
            />
          </svg>
        }
      />
    </div>
  );
};

export default ProductDescription;
