// utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://127.0.0.1/api/', // Здесь вы можете использовать ваш базовый URL
  withCredentials: true, // Включаем сохранение куков
});

export default instance;
