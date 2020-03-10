<template>
  <div>
    <div class="row">
      <Cell v-on:click="onClickCell" />
      <Cell v-on:click="onClickCell" />
      <Cell v-on:click="onClickCell" />
    </div>
    <div class="row">
      <Cell v-on:click="onClickCell" />
      <Cell v-on:click="onClickCell" />
      <Cell v-on:click="onClickCell" />
    </div>
    <div class="row">
      <Cell v-on:click="onClickCell" />
      <Cell v-on:click="onClickCell" />
      <Cell v-on:click="onClickCell" />
    </div>
  </div>
</template>

<script>
  import Cell from './Cell'

  export default {
    components: {Cell},
    methods:{
      onClickCell(){
        console.log("cell be clicked")
      }
    }
  }
</script>

<style>
  .row{
    display: flex;
  }
</style>
