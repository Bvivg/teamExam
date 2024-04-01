export const handleChange = (e, func) => {
  const { name, value } = e.target;
  func((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
