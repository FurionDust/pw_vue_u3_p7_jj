import axios from "axios";

const obtenerPorId = async (id) => {
    //http://localhost:8080/matriculaApi/v1.1/personas/4
    const data = axios.get(`http://localhost:8081/matriculaApi/v1.1/personas/${id}`).then(r => r.data)
    console.log(data);
    return data;
}

const insertar = async (body) => {
    axios.post(`http://localhost:8081/matriculaApi/v1.1/personas`, body).then(r => r.data);
    return data;
}
const actualizar = async (body) => {
    axios.put(`http://localhost:8081/matriculaApi/v1.1/personas/${id}`, body).then(r => r.data);
    return data;
}
const actualizarParcial = async (body) => {
    axios.patch(`http://localhost:8081/matriculaApi/v1.1/personas/${id}`, body).then(r => r.data);
    return data;
}
const eliminar = async (id) => {
    axios.delete(`http://localhost:8081/matriculaApi/v1.1/personas/${id}`).then(r => r.data);
    return data;
}

//FACHADA
export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
}

export const insertarFachada = async (body) =>{
    return await insertar(body);
}

export const actualizarFachada = async (body) =>{
    return await actualizar(body);
}

export const actualizarParcialFachada = async (body) =>{
    return await actualizarParcial(body);
}

export const eliminarFachada = async (id) =>{
    return await eliminar(id);
}