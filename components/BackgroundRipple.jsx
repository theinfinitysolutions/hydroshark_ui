import React from "react";

const BackgroundRipple = (props) => {
  return (
    <div className={`ripple-background  -z-10`}>
      <div className={`circle xxlarge shade1 ${props.currentColor} `}></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle xlarge shade2"
      ></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle large shade3"
      ></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle mediun shade4"
      ></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle small shade5"
      ></div>
    </div>
  );
};

export default BackgroundRipple;
