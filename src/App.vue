<template>
  <div>
    <div>the value of n is {{n}}</div>
    <div class="row">
      <Cell @click="onClickCell" :n="n"/>
      <Cell @click="onClickCell" :n="n"/>
      <Cell @click="onClickCell" :n="n"/>
    </div>
    <div class="row">
      <Cell @click="onClickCell" :n="n"/>
      <Cell @click="onClickCell" :n="n"/>
      <Cell @click="onClickCell" :n="n"/>
    </div>
    <div class="row">
      <Cell @click="onClickCell" :n="n"/>
      <Cell @click="onClickCell" :n="n"/>
      <Cell @click="onClickCell" :n="n"/>
    </div>
  </div>
</template>

<script>
  import Cell from './Cell'

  export default {
    components: {Cell},
    data(){
      return{n:0}
    },
    methods:{
      onClickCell(){
        console.log("cell be clicked");
        this.n+=1;
      }
    }
  }
</script>

<style>
  .row{
    display: flex;
  }
</style>
