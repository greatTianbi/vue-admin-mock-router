<template>
  <div>
    <h1>运算结果：{{ count }}</h1>
    <button @click="addCount">点击+1</button>
    <button @click="minusCount">点击-1</button>
  </div>
</template>

<script>

  import { mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        
      }
    },
    computed: mapGetters([
      'count'   
    ]),
    methods:mapActions([
      'addCount',   // 映射 this.addCount() 到 this.$store.dispatch('addCount')
      'minusCount'
    ])
  }
</script>

<style scoped>
  h1, h2, h3 {
    font-weight: normal;
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
