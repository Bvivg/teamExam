import React from "react";

const Avatar = ({ imgPath, imgSize }) => {
  const img = ["avatar", imgSize];
  return (
    <div className={img}>
      <img src={imgPath} />
    </div>
  );
};

export default Avatar;
