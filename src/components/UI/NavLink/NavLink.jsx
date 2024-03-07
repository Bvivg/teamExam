import React from "react";
import Button from "../Button/Button";
import { redirect } from "next/navigation";

const NavLink = ({ content, to }) => {
  const onNavigate = () => redirect(to)
  return (
    <Button theme="navLink" event={onNavigate}>
      {content}
    </Button>
  );
};

export default NavLink;
