'use client'
import Link from "next/link";
import styles from "./style.module.scss";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const NavLink = ({ children, to }) => {
  const router = usePathname();
  return (
    <Link
      href={to}
      className={clsx(styles.navLink, router === to && styles.active)}
    >
      {children}
    </Link>
  );
};

export default NavLink;
