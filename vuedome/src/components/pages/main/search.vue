<template>
  <div id="search-s" class="search-s">
    <mt-swipe :auto="0" class="swipe">
        <mt-swipe-item>
            <router-link v-for="item in navbox" to="#">
                <div>
                    <img v-bind:src="item.img">
                </div>
                <span>{{item.span}}</span>
            </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
            <router-link v-for="item in navbox" to="#">
                <div>
                    <img v-bind:src="item.img">
                </div>
                <span>{{item.span}}</span>
            </router-link>
        </mt-swipe-item>
        <!-- <mt-swipe-item>
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3054954383,2120791821&fm=200&gp=0.jpg" alt="">
        </mt-swipe-item> -->
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
      return {
          navbox:[
          {
              img: "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "美食"
          },
          {
              img: "https://fuss10.elemecdn.com/8/a5/78332f1f7ff14afbb97b4f125911cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "下午茶"
          },
          {
              img: "https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "商超便利"
          },
          {
              img: "https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "果蔬生鲜"
          },
          {
              img: "https://fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "大牌五折"
          },
          {
              img: "https://fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "医疗健康"
          },
          {
              img: "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "浪漫鲜花"
          },
          {
              img: "https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "麻辣烫"
          }
      ]
      }
  }
}
</script>

<style>
    .search-s {
        width: 100%;
        height: 100%;
    }
    .swipe {
        height: 200px;
        clear: both;
        background-color: #a59696;
    }
    .swipe img {
        width: 50px;
    }
    .swipe a {
        width: 25%;
        float: left;
        height: 80px;
        padding-top: 10px;
        cursor: pointer;
    }
    .swipe a span {
        font-size: 14px;
    }
</style>
