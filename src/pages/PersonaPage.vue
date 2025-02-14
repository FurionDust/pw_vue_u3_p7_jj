<template>
<div>
  <FormularioComponente />
</div>
</template>

<script>
import {obtenerPorIdFachada} from '../client/PersonaClient'
import FormularioComponente from '../components/FormularioComponente.vue'
export default {
  name: 'App',
  components: {
    FormularioComponente
  }
}
</script>

<style>

</style>