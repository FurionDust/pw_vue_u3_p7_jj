<template>
<h2>Adivina el pokemon de la imagen</h2>
<PokemonImage :pokemonId="83" :showPokemon="false"/>
<PokemonOption/>
</template>

<script>
import PokemonImage from "../components/PokermonImage.vue"
import PokemonOption from "../components/PokemonOption.vue"

export default {
components:{
    PokemonImage,PokemonOption
}
}
</script>

<style>

</style>