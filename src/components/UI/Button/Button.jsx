import clsx from "clsx";
import "./style.scss";

const Button = ({ children, primary, size, click, type, isDisabled }) => {
  return (
    <button
      onClick={click}
      type={type}
      disabled={isDisabled}
      className={clsx({ [primary]: primary, [size]: size })}
    >
      {children}
    </button>
  );
};

export default Button;
