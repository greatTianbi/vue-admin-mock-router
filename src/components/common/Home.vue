<template>
  <div id="app">
    
    <com-header></com-header>
    
    <el-row>
      <el-col :span="4">
        <com-nav></com-nav>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
    <com-Footer></com-Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Nav from '@/components/common/Nav'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    comHeader: Header,
    comFooter: Footer,
    comNav: Nav
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
