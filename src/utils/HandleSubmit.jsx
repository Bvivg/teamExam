export const handleSubmit = async (e, formData, func, id = null) => {
  e.preventDefault();
  try {
    if (id) {
      await func(id, formData);
    } else {
      await func(formData);
    }
  } catch (error) {
    return error;
  }
};
