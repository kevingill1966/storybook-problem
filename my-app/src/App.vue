<template>
  <div id="app">
    <green-block></green-block>

    <div class="red-block">
      Red Block
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">

$red-color: red;

.red-block {
  margin: 50px;
  width: 100px;
  height: 100px;
  background-color: $red-color;
}


</style>
