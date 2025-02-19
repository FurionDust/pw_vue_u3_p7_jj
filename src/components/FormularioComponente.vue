<template>
  <div class="container">
    <div class="formu">
      <h1>Formulario Persona</h1>

      <p type="Id">
        <input type="text" id="id" name="id" v-model="id" />
      </p>
      <p type="Nombre">
        <input type="text" id="nombre" name="nombre" v-model="nombre" />
      </p>
      <p type="Apellido">
        <input type="text" id="apellido" name="apellido" v-model="apellido" />
      </p>
      <p type="Fecha de Nacimiento ">
        <input
          type="text"
          id="fechaNacimiento"
          name="fechaNacimiento"
          v-model="fechaNacimiento"
        />
      </p>
      <div class="botones">
      <button @click="buscar()">Consultar</button>
      <button @click="guardar()">Guardar</button>
      <button @click="actualizar()">Actualizar</button>
      <button @click="actualizarParcial()">Actualizar Parcial</button>
      <button @click="eliminar()">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerPorIdFachada, insertarFachada, actualizarFachada, actualizarParcialFachada, eliminarFachada } from "@/client/PersonaClient";
export default {
  data() {
    return {
      id: 0,
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
    };
  },
  mounted() {
    obtenerPorIdFachada(6);
  },
    methods:{
    async buscar(){
      const data= await obtenerPorIdFachada(this.id);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
      alert("Persona encontrada exitosamente");
    },
    async guardar(){
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
      };  
      await insertarFachada(bodyPersona);
      alert(`Persona insertada exitosamente:
      - Nombre: ${this.nombre}
      - Apellido ${this.apellido}
      - Fecha de Nacimiento ${this.fechaNacimiento}`);
    },
    async actualizar() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
      };
      await actualizarFachada(this.id, bodyPersona);
      alert("Persona actualizada exitosamente");
    },
    async actualizarParcial() {
      const bodyPersona = {};
      if (this.nombre) bodyPersona.nombre = this.nombre;
    

      await actualizarParcialFachada(this.id, bodyPersona);
      alert("Persona actualizada exitosamente");
    },
    async eliminar() {
      await eliminarFachada(this.id);
      alert("Persona eliminada exitosamente");
      this.id = null;
      this.nombre = "";
      this.apellido = "";
      this.fechaNacimiento = "";
    },
  },
};
</script>

<style>
.container {
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
p::before {
  content: attr(type);
  display: block;
  text-align: left;
  margin-left: 25px;
}

input {
  width: 250px;
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 10px;
  box-shadow: 2px 2px 5px rgb(112, 207, 88);
}
.formu {
  justify-content: center;
  text-align: center;
  height: 600px;
  width: 400px;
  border: solid rgb(112, 207, 88);
  border-radius: 30px;
  color: rgb(91, 169, 72);
  background: rgb(192, 229, 183);
}
button {
  color: white;
  background: rgb(112, 207, 88);
  border: transparent;
  border-radius: 3px;

  padding-top: 15px;
  width: 150px;
  height: 40px;
}
.botones {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px;
  justify-items: center;
}
</style>