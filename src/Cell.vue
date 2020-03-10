<template>
  <div>
    <div class="cell" v-on:click="a=true">
      <template v-if="a">X</template>
      <template v-else></template>
    </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{a:false}
    }
  }
</script>

<style>
  .cell{
    border: 1px solid black;
    width:100px;
    height: 100px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 80px;
  }
</style>
