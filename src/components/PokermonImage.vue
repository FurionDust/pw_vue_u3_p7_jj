<template>
  <div class="pokemon-container">
    <img v-show="!showPokemon" :src="imagenFuente" alt="No se pudo cargar" class="ocultar" />

    <img v-show="showPokemon" :src="imagenFuente2" alt="No se pudo cargar" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      propiedadPrueba:'Este texto es de prueba'
    }
  },
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon:{
      type:Boolean,
      required:true
    }
  },
  computed: {
    imagenFuente() {
     /* return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.pokemonId +
        ".svg"
      );*/
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
     imagenFuente2() {
return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${this.pokemonId}.gif`;
     }
  },
  methods:{
    metodoPrueba(){
      console.log("Metodo ejecutado desde el padre");
    }
  }
};
</script>

<style>
.ocultar {
  filter: brightness(0);
}

img {
  width: 200px;
  height: 200px;
  position: absolute;
  right: 42%;
}
.pokemon-container {
  height: 200px;
}
</style>