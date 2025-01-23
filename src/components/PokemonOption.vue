<template>
  <div class="options-container">
    <ul>
      <li
        @click="seleccionado(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      corr:false,
    }
  },
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    seleccionado(id) {
      console.log("Hizo Click");
      console.log(id);
      const objetoEnviado = {
        identificador:id,
        valor2:true,
        valor3:"Ejemplo2"
      };

      this.$emit("seleccion", objetoEnviado);
    },
  },
};
</script>

<style>
.options-container {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  list-style: none;
}
li {
  background: white;
  width: 250px;
  border: 1px solid green;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px rgb(12, 110, 12);
  cursor: pointer;
}
li:hover {
  background: rgb(133, 196, 133);
}
</style>