import clsx from 'clsx';
import styles from './style.module.scss'

const Input = ({type, name, placeholder, icon, onChange, value }) => {
  return (
    <label className={clsx(styles.input)}>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
      {icon}
    </label>
  );
};

export default Input;
