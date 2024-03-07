import React from "react";
import Button from "../Button/Button";

const NavLink = ({ content, to }) => {
  return (
    <Button theme="navLink" event={to}>
      {content}
    </Button>
  );
};

export default NavLink;
