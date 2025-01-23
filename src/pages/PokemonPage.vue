<template>
  <div class="container" v-if="pokemonObjeto != null">
    <h2>Adivina el pokemon de la imagen</h2>
    <PokemonImage
      ref="miHijo"
      :pokemonId="pokemonObjeto.id"
      :showPokemon="pokemonShow"
    />
    <PokemonOption
      @seleccion="validarRespuesta($event)"
      :pokemons="pokemonArr"
      v-show="showComponent && this.pokemonObjeto.id !== idSeleccionado"
    />
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
      showComponent: true,
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
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  updated() {
    console.log("updated");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },

  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      console.log("Este es el aleatorio");
      console.log(valorAleatorio);
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
    validarRespuesta(valor) {
      console.log("LLego el evento al padre");
      console.log(valor);
      const idSeleccionado = valor.identificador;
      if (this.pokemonObjeto.id === idSeleccionado) {
        console.log("Selecciono el pokemon correcto");
        
        
        //this.pokemonShow = true;
        this.pokemonShow=valor.valor2;
        this.showComponent = false;
      } else {
        console.log("error...");
        this.pokemonShow = false;
      }
      const valorHijo = this.$refs.miHijo.pokemonId;
      console.log("Val obt por RFS");
      console.log(valorHijo);
      console.log(this.$refs.miHijo.propiedadPrueba);
      this.$refs.miHijo.metodoPrueba();

      valor.valor2;
    },
  },
};
</script>

<style>
</style>