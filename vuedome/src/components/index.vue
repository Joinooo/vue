<template>
  <div>
    <headers></headers>
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
import headers from './pages/header/header'
import footers from './pages/footer/bottom'
console.log(headers)
export default {
  name: 'INDEX',
  data () {
    return {
      msg: ''
    }
  },
  components: {headers, footers}
}
</script>

<style scoped>

</style>
