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
      <button @click="buscar()">Consultar</button>
      <button @click="guardar()">Guardar</button>
    </div>
  </div>
</template>

<script>
import { insertarFachada, obtenerPorIdFachada } from "@/client/PersonaClient";
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
      const data = await obtenerPorIdFachada(this.id);
      this.nombre = data.nombre;
      this.apellido =data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
    },
    async guardar(){
      const bodyPersona = {
        nombre:this.nombre,
        apellido:this.apellido,
        fechaNacimiento:this.fechaNacimiento
      }
      await insertarFachada(bodyPersona);
    }
  }
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
  height: 400px;
  width: 300px;
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
  margin: 0 25px;
  width: 80px;
  height: 20px;
}
</style>