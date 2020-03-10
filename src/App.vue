<template>
  <div>
    <div>the value of n is {{n}}</div>
    <div class="row">
      <Cell @click="onClickCell(0,$event)" :n="n"/>
      <Cell @click="onClickCell(1,$event)" :n="n"/>
      <Cell @click="onClickCell(2,$event)" :n="n"/>
    </div>
    <div class="row">
      <Cell @click="onClickCell(3,$event)" :n="n"/>
      <Cell @click="onClickCell(4,$event)" :n="n"/>
      <Cell @click="onClickCell(5,$event)" :n="n"/>
    </div>
    <div class="row">
      <Cell @click="onClickCell(6,$event)" :n="n"/>
      <Cell @click="onClickCell(7,$event)" :n="n"/>
      <Cell @click="onClickCell(8,$event)" :n="n"/>
    </div>
    <div>{{map}}</div>
  </div>
</template>

<script>
  import Cell from './Cell'

  export default {
    components: {Cell},
    data() {
      return {n: 0,map:[[null,null,null],[null,null,null],[null,null,null]]};
    },
    methods: {
      onClickCell(i,text) {
        console.log(`${i} was clicked, the content is ${text}`);
        this.map[Math.floor(i/3)][i%3] = text;
        this.n += 1;
      }
    }
  };
</script>

<style>
  .row {
    display: flex;
  }
</style>

<style>
  .cell {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
  }
</style>