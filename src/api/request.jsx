import axios from "axios";

const request = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`,
});

export const register = async (data) => {
  try {
    const response = await request.post("register/", data);
    console.log(data);
    return response.data; 
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    throw error; 
  }
};

export const logIn = async (data) => {
  try {
    const response = await request.post("login", data); // Изменил на "login" вместо "register"
    console.log(response.data);
    return response.data; // Опционально: возвращаем ответ от сервера
  } catch (error) {
    console.error("Ошибка при входе:", error);
    throw error; // Пробрасываем ошибку дальше для обработки
  }
};
