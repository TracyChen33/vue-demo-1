<template>
  <div>
    <div>the value of n is {{n}}</div>
    <div class="row">
<<<<<<< HEAD
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
=======
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
    </div>
    <div class="row">
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
    </div>
    <div class="row">
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
      <Cell v-on:click="onClickCell" v-bind:n="n"/>
>>>>>>> 03b2e0e2f1ccc69b2a2783fba8e3a485cc869c62
    </div>
  </div>
</template>

<script>
  import Cell from './Cell'

  export default {
    components: {Cell},
<<<<<<< HEAD
    data(){
      return{n:0}
    },
    methods:{
      onClickCell(){
        console.log("cell be clicked");
        this.n+=1;
=======
    data() {
      return {n: 0};
    },
    methods: {
      onClickCell() {
        console.log('cell be clicked');
          this.n+=1;

>>>>>>> 03b2e0e2f1ccc69b2a2783fba8e3a485cc869c62
      }
    }
  }
</script>

<style>
  .row {
    display: flex;
  }
</style>
