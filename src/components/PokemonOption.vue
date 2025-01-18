<template>
  <div class="options-container">
    <ul>
      <li @click="seleccionado" v-for="pokemon in pokemons" :key="pokemon.id">
        {{pokemon.nombre}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons:{
      type:Array,
      required:true
    }
  },
  methods:{
    seleccionado(){
      console.log("Hizo Click")
    }
  }
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