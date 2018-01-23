<template>
    <div class="footers">
        <ul>
            <li>
                <router-link to='/index/home'>首页</router-link>
            </li>
            <li>
                 <router-link to='/index/search'>发现</router-link>
            </li>
            <li>
                 <router-link to='/index/zhouwei'>订单</router-link>
            </li>
            <li>
                 <router-link to='/index/geren'>我的</router-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
  
}
</script>
<style>
    .footers {
        width: 100%;
        position: fixed;
        bottom: 0;
        overflow: hidden;
    }
    .footers ul {
        width: 100%;
        clear: both;
        height: 100%;
    }
    .footers ul li {
        width: 25%;
        height: 30px;
        /* background-color: blue; */
        float: left;
    }
    .footers ul li a {
        padding: 10px;
    }
</style>


