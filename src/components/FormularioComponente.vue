<template>
  <div class="container">
    
    <div class="formu">
      <h1>Formulario Persona</h1>
      <form>
        <p type="Nombre">
          <input type="text" id="nombre" name="nombre" :value="nombre " />
        </p>
        <p type="Apellido">
          <input type="text" id="apellido" name="apellido" :value="apellido" />
        </p>
        <p type="Fecha de Nacimiento ">
          <input
            type="text"
            id="fechaNacimiento"
            name="fechaNacimiento"
            :value="fechaNacimiento"
          />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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