
import axios from "axios";
import API_URL from "./config"; // Importa la URL de conexión desde el archivo de configuración

const usuarioApi = axios.create({
  baseURL: `${API_URL}`,
});

export const getUsuarios = async () => {
  try {
    const response = await usuarioApi.get("/usuario");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsuarioById = async (id: string) => {
  try {
    const response = await usuarioApi.get(`/detalle/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addUsuario = async (usuarioData: any) => {
  try {
    const response = await usuarioApi.post("/createusuario", usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editUsuario = async (id: string, usuarioData: any) => {
  try {
    const response = await usuarioApi.put(`/updateusuario/${id}`, usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUsuario = async (id: string) => {
  try {
    const response = await usuarioApi.delete(`/deleteusuario/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
