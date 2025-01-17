<template>
  <div class="options-container">

    <ul>
      <li>Opcion 1</li>
      <li>Opcion 2</li>
      <li>Opcion 3</li>
      <li>Opcion 4</li>
    </ul>
  </div>F
</template>

<script>
export default {

}
</script>

<style>
.options-container{
display: flex;
justify-content: center;
text-align: center;
}
ul{
  list-style: none;
}
li{
  background: white;
  width: 250px;
  border: 1px solid green;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px rgb(12, 110, 12);
  cursor: pointer;

}
li:hover{
  background: rgb(133, 196, 133);
}
</style>