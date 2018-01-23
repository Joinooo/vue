<template>
  <div class="home-s">
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
    </mt-swipe>
    <!-- <div class="home-nav">
        推荐商家
    </div> -->
    <div class="contents">
        <section class="box" v-for=" item in contentbox">
            <router-link to="#">
                <div class="content-img">
                    <img v-bind:src="item.img" alt="">
                </div>
                <div class="content-center">
                    <section class="center">
                        <h1>{{item.text}}</h1>
                        <span>sss</span>
                    </section>
                    <section class="center">
                        <div class="center-left">
                            <span>{{item.xiaoshoue}}</span>
                        </div>
                        <div class="center-tekuai">
                           <span>{{item.tekuai}}</span>
                       </div>
                    </section>
                   <section class="center">
                       <div class="center-left">
                           <span>{{item.qisong}} | {{item.peisongfei}}</span>
                       </div>
                       <div class="center-right">
                           <span>{{item.juli}} | {{item.shijian}}</span>
                       </div>
                    </section>
                    <section class="center">
                        <span class="bottom-left">{{item.shou}}</span>
                        <span class="bottom-right">{{item.xin}}</span>
                    </section>
                </div>
            </router-link>
        </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          navbox:[{
              img: "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "美食"
          },{
              img: "https://fuss10.elemecdn.com/8/a5/78332f1f7ff14afbb97b4f125911cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "下午茶"
          },{
              img: "https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "商超便利"
          },{
              img: "https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "果蔬生鲜"
          },{
              img: "https://fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "大牌五折"
          },{
              img: "https://fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "医疗健康"
          },{
              img: "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "浪漫鲜花"
          },{
              img: "https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
              span: "麻辣烫"
          }],
          contentbox: [
              {
                img: "https://fuss10.elemecdn.com/4/c3/5c03eb2efb2c0a75de0032857dcdbpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",  
                text: "京捷生鲜（芳草地店）",
                qisong: "￥20起送",
                peisongfei: "配送费6￥",
                juli: "600m",
                shijian : "20分钟",
                tekuai: "蜂鸟特快",
                xiaoshoue: "☆☆☆☆☆ | 五月售67单",
                shou: "首",
                xin: "新用户下单立减20￥"
              },
              {
                img: "https://fuss10.elemecdn.com/4/c3/5c03eb2efb2c0a75de0032857dcdbpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",  
                text: "京捷生鲜（芳草地店）",
                qisong: "￥20起送",
                peisongfei: "配送费6￥",
                juli: "600m",
                shijian : "20分钟",
                tekuai: "蜂鸟特快",
                xiaoshoue: "☆☆☆☆☆ | 五月售67单",
                shou: "首",
                xin: "新用户下单立减20￥"
              },
              {
                img: "https://fuss10.elemecdn.com/4/c3/5c03eb2efb2c0a75de0032857dcdbpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",  
                text: "京捷生鲜（芳草地店）",
                qisong: "￥20起送",
                peisongfei: "配送费6￥",
                juli: "600m",
                shijian : "20分钟",
                tekuai: "蜂鸟特快",
                xiaoshoue: "☆☆☆☆☆ | 五月售67单",
                shou: "首",
                xin: "新用户下单立减20￥"
              },
              {
                img: "https://fuss10.elemecdn.com/4/c3/5c03eb2efb2c0a75de0032857dcdbpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",  
                text: "京捷生鲜（芳草地店）",
                qisong: "￥20起送",
                peisongfei: "配送费6￥",
                juli: "600m",
                shijian : "20分钟",
                tekuai: "蜂鸟特快",
                xiaoshoue: "☆☆☆☆☆ | 五月售67单",
                shou: "首",
                xin: "新用户下单立减20￥"
              },
              {
                img: "https://fuss10.elemecdn.com/4/c3/5c03eb2efb2c0a75de0032857dcdbpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",  
                text: "京捷生鲜（芳草地店）",
                qisong: "￥20起送",
                peisongfei: "配送费6￥",
                juli: "600m",
                shijian : "20分钟",
                tekuai: "蜂鸟特快",
                xiaoshoue: "☆☆☆☆☆ | 五月售67单",
                shou: "首",
                xin: "新用户下单立减20￥"
              },
              {
                img: "https://fuss10.elemecdn.com/4/c3/5c03eb2efb2c0a75de0032857dcdbpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",  
                text: "京捷生鲜（芳草地店）",
                qisong: "￥20起送",
                peisongfei: "配送费6￥",
                juli: "600m",
                shijian : "20分钟",
                tekuai: "蜂鸟特快",
                xiaoshoue: "☆☆☆☆☆ | 五月售67单",
                shou: "首",
                xin: "新用户下单立减20￥"
              },
              {
                img: "https://fuss10.elemecdn.com/4/c3/5c03eb2efb2c0a75de0032857dcdbpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",  
                text: "京捷生鲜（芳草地店）",
                qisong: "￥20起送",
                peisongfei: "配送费6￥",
                juli: "600m",
                shijian : "20分钟",
                tekuai: "蜂鸟特快",
                xiaoshoue: "☆☆☆☆☆ | 五月售67单",
                shou: "首",
                xin: "新用户下单立减20￥"
              },
              
          ]
      }
  }
}
</script>

<style>
    .home-s {
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

    .home-nav {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: -webkit-center;
    }
    .home-nav::after {
        display: block;
        content: "";
        background-color: #999;
        width: 20px;
        height: 1px;
        position: absolute;
        left: 35%;
        top: 41.2%;
    }
    .home-nav::before {
        display: block;
        content: "";
        background-color: #999;
        width: 20px;
        height: 1px;
        position: absolute;
        left: 60%;
        top: 41.2%;
    }
    .contents {
        width: 100%;
    }
    .contents .box {
        width: 100%;
    }
    .contents .box a {
        display: inline-block;
        height: 100px;
        clear: both;
        width: 95%;
        padding: 20px 0;
    }
    .contents .box a .content-img {
        /* min-width: 200px; */
        width: 20%;
        float: left;
    }
    .contents .box a .content-img img {
        width: 80px;
    }
    .contents .box a .content-center {
        float: left;
        width: 80%;
    }
    .contents .box a .content-center .center {
        width: 100%;
        clear: both;
        overflow: hidden;
        padding-top: 5px;
    }
    .contents .box a .content-center h1 {
        font-size: 16px;
        float: left;
        padding-left: 20px;
    }
    .contents .box a .content-center span {
        float: right;
    }
    .contents .box a .content-center .center .center-left {
        padding-left: 20px;
    }
    .contents .box a .content-center .center .center-left span {
        float: left;
        font-size: 12px;
    }
    .contents .box a .content-center .center .center-right span {
        float: right;
        font-size: 12px;
    }
    .contents .box a .content-center .center .center-tekuai {
        float: right;
    }
    .contents .box a .content-center .center .center-tekuai span {
        /* width: 100px; */
        background-color: #0af;
        border-radius: 2px;
        font-size: 12px;
        color: #fff;
    }
    .contents .box a .content-center .center .bottom-left {
        font-size: 12px;
        float: left;
        margin-left: 20px;
        color: #fff;
        background-color: #70bc46;
    }
    .contents .box a .content-center .center .bottom-right {
        font-size: 12px;
        float: left;
        padding-left: 10px;

    }
</style>
