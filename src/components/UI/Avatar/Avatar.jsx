import clsx from "clsx";
import React from "react";
import "./style.scss";
const Avatar = ({ imgPath, imgSize }) => {
  return (
    <div className={clsx("avatar", imgSize)}>
      <img src={imgPath} />
    </div>
  );
};

export default Avatar;
