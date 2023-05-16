import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Style.css";
const Recyclenavi = () => {
  const types = useLocation();
  const navigate = useNavigate();
  return (
    <div className="containmainnavi">
      {types.state == "Recycle" ? (
        <div className="containavi">
          <div className="txtdata">
            <svg
              width="158"
              height="158"
              viewBox="0 0 158 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              onClick={() => navigate("/resell")}
            >
              <g filter="url(#filter0_d_0_1)">
                <rect x="4" width="150" height="150" rx="10" fill="white" />
              </g>
              <path
                d="M37 112.372L120.748 38"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <path
                d="M37 38L120.683 112.446"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="0"
                  y="0"
                  width="158"
                  height="158"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className=" hed">
              <h3>Thank You for choosing your product to {types.state}</h3>
              <svg
                width="30"
                height="30"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#75F869" />
                <line
                  x1="41.9199"
                  y1="46.5994"
                  x2="55.5994"
                  y2="26.0801"
                  stroke="black"
                  stroke-width="15"
                  stroke-linecap="round"
                />
                <line
                  x1="23.3555"
                  y1="42.0024"
                  x2="40.1558"
                  y2="47.1034"
                  stroke="black"
                  stroke-width="15"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h4>Get 10% off on your next purchase</h4>
            <h4 className="h4o">Bring your cloths to nearest store</h4>
            <button>Click to view store</button>
            <div className=""></div>
          </div>
        </div>
      ) : (
        <div className="containavi">
          <div className="txtdata">
            <svg
              width="158"
              height="158"
              viewBox="0 0 158 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              onClick={() => navigate("/resell")}
            >
              <g filter="url(#filter0_d_0_1)">
                <rect x="4" width="150" height="150" rx="10" fill="white" />
              </g>
              <path
                d="M37 112.372L120.748 38"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <path
                d="M37 38L120.683 112.446"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="0"
                  y="0"
                  width="158"
                  height="158"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className=" hed">
              <h3>Thank You for choosing your product to Recycle</h3>
              <svg
                width="30"
                height="30"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#75F869" />
                <line
                  x1="41.9199"
                  y1="46.5994"
                  x2="55.5994"
                  y2="26.0801"
                  stroke="black"
                  stroke-width="15"
                  stroke-linecap="round"
                />
                <line
                  x1="23.3555"
                  y1="42.0024"
                  x2="40.1558"
                  y2="47.1034"
                  stroke="black"
                  stroke-width="15"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h4>Get 10% off on your next purchase</h4>
            <div className=""></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recyclenavi;
