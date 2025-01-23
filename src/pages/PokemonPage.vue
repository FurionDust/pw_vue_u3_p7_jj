<template>
  <div class="container" v-if="pokemonObjeto != null">
    <div v-if="jugando">
      <h2>Adivina el pokemon de la imagen</h2>
      <button @click="cambiar">Cambiar Pokemon</button>

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
      <h2 class="intent">Intentos: {{ intentos }}</h2>
    </div>

    <div class="resultado" v-else>
      <h2 v-if="intentos > 0" class="text">Ganaste!!!!</h2>
      <h2 v-else class="text">Perdiste...</h2>

      <PokemonImage
        v-if="intentos > 0"
        ref="miHijo"
        :pokemonId="pokemonObjeto.id"
        :showPokemon="true"
      />
      <img
        class="gi"
        v-else
        src="https://media3.giphy.com/media/12Bpme5pTzGmg8/200.gif?cid=6c09b952sgacfcf24qxlaln8uuaa87sn7dla5l4uku8myv3t&ep=v1_gifs_search&rid=200.gif&ct=g"
        alt="Perdiste"
      />
      <button @click="jugarDeNuevo">Jugar de nuevo</button>
    </div>
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
      jugando: true,
      intentos: 3,
    };
  },

  components: {
    PokemonImage,
    PokemonOption,
  },
  mounted() {
    this.cargarJuego();
  },

  methods: {
    cambiar() {
      this.cargarJuego();
    },
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;

      // Reinicia estados iniciales del juego
      this.jugando = true;
      this.pokemonShow = false;
      this.showComponent = true;
      this.intentos = 3;
    },
    validarRespuesta(valor) {
      const idSeleccionado = valor.identificador;

      if (this.pokemonObjeto.id === idSeleccionado) {
        // Si la respuesta es correcta
        this.pokemonShow = true;
        this.showComponent = false;
        this.jugando = false;
      } else {
        this.intentos--;
        if (this.intentos === 0) {
          this.jugando = false;
        }
      }
    },
    jugarDeNuevo() {
      this.cargarJuego();
    },
  },
};
</script>
<style>
.container {
  background-color: white;
}
.gana {
  max-height: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 00%;
  max-width: 100%;
}
.text {
  font-size: 50px;
}
button {
  background: white;
  width: 250px;
  border: 1px solid rgb(255, 0, 0);
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px rgb(255, 71, 71);
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 50px;
}
.intent {
  margin-left: 50px;
}
.gi {
  margin-top: 50px;
}
</style>