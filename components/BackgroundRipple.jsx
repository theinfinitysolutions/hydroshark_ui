import React from "react";

const BackgroundRipple = (props) => {
  return (
    <div className={`ripple-background  -z-10`}>
      <div
        className={`circle xxlarge1 lg:xxlarge shade1 ${props.currentColor} `}
      ></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle xlarge1 lg:xlarge shade2"
      ></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle large1 lg:large shade3"
      ></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle medium1 lg:mediun shade4"
      ></div>
      <div
        style={{
          backgroundColor: props.currentColor,
        }}
        className="circle small1 lg:small shade5"
      ></div>
    </div>
  );
};

export default BackgroundRipple;
