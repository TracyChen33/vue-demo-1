<template>
  <div>
    {{n}}
<<<<<<< HEAD
    <div class="cell" @click="onClickSelf">
=======
    <div class="cell" v-on:click="OnClickSelf">
>>>>>>> 03b2e0e2f1ccc69b2a2783fba8e3a485cc869c62
      <template v-if="a">{{text}}</template>
      <template v-else></template>
    </div>
  </div>
</template>

<script>
  export default {
<<<<<<< HEAD
    props: ['n'],
=======
    props:['n'],
>>>>>>> 03b2e0e2f1ccc69b2a2783fba8e3a485cc869c62
    data() {
      return {a: false, text: 'O'}
    },
    methods: {
<<<<<<< HEAD
      onClickSelf() {
=======
      OnClickSelf() {
>>>>>>> 03b2e0e2f1ccc69b2a2783fba8e3a485cc869c62
        this.a = true
        this.$emit('click')
      }
    },

  }
</script>

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
