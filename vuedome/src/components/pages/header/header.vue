<template>
   <div class="headers">
       <div class="search">
           <a href="#">
               <span>搜索</span>
           </a>
       </div>
   </div>
</template>
<script>
export default {
  data () {
      return {
          value: ''
      }
  },
  components: {
     
  }
}
</script>
<style>
    .headers {
        width: 100%;
    }
    .headers .search {
        width: 100%;
        height: 50px;
        background-color: gray;
    }
    .headers .search a {
        display: inline-block;
        width: 80%;
        height: 30px;
        background-color: #fff;
        margin-top: 10px;
        font-size: 14px;
    }
    .headers .search a span {
        display: inline-block;
        margin-top: 5px;
    }
</style>


