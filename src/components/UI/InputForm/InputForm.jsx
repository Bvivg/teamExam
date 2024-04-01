import clsx from "clsx";
import styles from "./style.module.scss";

const Input = ({
    type,
    name,
    placeholder,
    icon,
    onChange,
    value,
    textarea,
    button,
}) => {
    const InputComponent = textarea ? "textarea" : "input";
    return (
        <label className={clsx(styles.input)}>
            {button ? icon : null}
            <InputComponent
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {button ? button : icon}
        </label>
    );
};

export default Input;
