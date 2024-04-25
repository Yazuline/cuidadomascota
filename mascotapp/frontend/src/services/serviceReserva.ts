    import axios from "axios";
    import API_URL from "./config";

    const reservaApi = axios.create({
    baseURL: API_URL,
    });

    export const getReservas = async () => {
    try {
        const response = await reservaApi.get("/reservas");
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const getReservaById = async (id: string) => {
    try {
        const response = await reservaApi.get(`/reserva/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const addReserva = async (reservaData: any) => {
    try {
        const response = await reservaApi.post("/reserva", reservaData);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const editReserva = async (id: string, reservaData: any) => {
    try {
        const response = await reservaApi.put(`/reserva/${id}`, reservaData);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const deleteReserva = async (id: string) => {
    try {
        const response = await reservaApi.delete(`/reserva/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    
// // Test de las funciones
// export const test = async () => {
//     try {
//       // Agregar una reserva
//       const reservaData = {
//         usuarioId: "661dbe653bfe8e83b56d3326",
//         cuidadorId: "661dbe653bfe8e83b56d3326",
//         servicio: "Paseo a Centinela",
//         mascotaId: "661ef728a34d8b4dccad5a4b",
//         estado: "Confirmado",
//         fechaDelServicio: "2024-04-15T12:00:00Z",
//         precioDelServicio: 1330
//       };
//       console.log("Agregando reserva...");
//       const newReserva = await addReserva(reservaData);
//       console.log("Reserva creada:", newReserva);
  
//       // Obtener todas las reservas
//       console.log("Obteniendo todas las reservas...");
//       const reservas = await getReservas();
//       console.log("Reservas:", reservas);
  
//       // Obtener una reserva por ID
//       console.log(`Obteniendo la reserva con ID: ${newReserva._id}`);
//       const reservaById = await getReservaById(newReserva._id);
//       console.log("Reserva por ID:", reservaById);
  
//       // Editar la reserva
//       console.log(`Editando la reserva con ID: ${newReserva._id}`);
//       const editedReserva = await editReserva(newReserva._id, {
//         ...reservaById,
//         servicio: "Paseo a Bosque",
//         precioDelServicio: 1500
//       });
//       console.log("Reserva editada:", editedReserva);
  
//       // Eliminar la reserva
//       console.log(`Eliminando la reserva con ID: ${newReserva._id}`);
//       await deleteReserva(newReserva._id);
//       console.log("Reserva eliminada correctamente.");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  
//   // Ejecutar el test
//   test();