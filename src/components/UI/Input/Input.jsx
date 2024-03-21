import styles from './style.module.scss'

const Input = ({ type, name, placeholder, icon, onChange, value }) => {
  return (
    <label className={styles.input}>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
      {icon}
    </label>
  );
};

export default Input;
