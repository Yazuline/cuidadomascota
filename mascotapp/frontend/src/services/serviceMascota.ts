
import axios from "axios";
import API_URL from "./config"; // Importa la URL de conexión desde el archivo de configuración

const mascotaApi = axios.create({
  baseURL: `${API_URL}`,
});

export const getMascotas = async () => {
  try {
    const response = await mascotaApi.get("/mascota");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMascotaById = async (id: string) => {
  try {
    const response = await mascotaApi.get(`/detallemascota/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addMascota = async (usuarioData: any) => {
  try {
    const response = await mascotaApi.post("/createmascota", usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editMascota = async (id: string, usuarioData: any) => {
  try {
    const response = await mascotaApi.put(`updatemascota/${id}`, usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMascota = async (id: string) => {
  try {
    const response = await mascotaApi.delete(`/deletemascota/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
