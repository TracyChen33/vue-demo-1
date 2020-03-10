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
    <div>{{result}}</div>
  </div>
</template>

<script>
  import Cell from './Cell'

  export default {
    components: {Cell},
    data() {
      return {
        n: 0,
        map: [[null, null, null], [null, null, null], [null, null, null]],
        result:false
      };
    },
    methods: {
      onClickCell(i, text) {
        console.log(`${i} was clicked, the content is ${text}`);
        this.map[Math.floor(i / 3)][i % 3] = text;
        this.n += 1;
        this.tell();
      },
    tell() {
      const map = this.map;
      for (let i = 0; i < 2; i++) {
        if (
          map[i][0] !== null &&
          map[i][0] === map[i][1] &&
          map[i][1] === map[i][2]
        ) {
          this.result = true
        }
      }
        for (let j = 0; j < 2; j++) {
          if (
            map[0][j] !== null &&
            map[0][j] === map[1][j] &&
            map[1][j] === map[2][j]
          ) {
            this.result = true;
          }
        }
          if (map[0][0] !== null &&
            map[0][0] === map[1][1] &&
            map[1][1] === map[2][2]
          ) {
            this.result = true;
          }
          if (map[0][2] !== null &&
            map[0][2] === map[1][1] &&
            map[1][1] === map[2][0]
          ) {
            this.result = true;
          }
        }
      }
    }
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