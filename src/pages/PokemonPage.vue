<template>
  <div class="container" v-if="pokemonObjeto != null">
    <h2>Adivina el pokemon de la imagen</h2>
    <PokemonImage :pokemonId="pokemonObjeto.id" :showPokemon="pokemonShow" />
    <PokemonOption :pokemons="pokemonArr" />
  </div>
</template>

<script>
import {
  obtenerAleatorioFachada,
  consultarPokemonsFachada,
} from "../client/PokemonClient.js";
import PokemonImage from "../components/PokermonImage.vue";
import PokemonOption from "../components/PokemonOption.vue";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
    };
  },

  components: {
    PokemonImage,
    PokemonOption,
  },
  mounted() {
    console.log("Se montó en la pagina el componente PokemonPage.vue");
    this.cargarJuego();
  },
  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      console.log("Este es el aleatorio");
      console.log(valorAleatorio)
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
  },
};
</script>

<style>
</style>