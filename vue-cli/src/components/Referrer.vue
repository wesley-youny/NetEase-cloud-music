<template>
  <div class="referrer">
    <div class="banner"
    :style="{backgroundImage: 'url(' + bannerBgArr[curpage] + ')'}"
    @mouseover='clearSet()'
    @mouseout='openSet()'
    >
      <div class="wrapper">
        <transition-group name="fadeIn" tag="ul">
            <li class="slide"
            v-for="(item,index) in bannerArry"
            v-show="index === curpage"
            :key="'a'+index">
                <img :src="item.imageUrl" alt="">
            </li>
        </transition-group>
        <ul>
          <li  v-for="(item,index) in bannerArry"
          :key="'a'+index"></li>
        </ul>
        <div class="box">
          <p class="last" @click="getLast"></p>
          <p class="next" @click="gteNext"></p>
        </div>
        <div class="download">
          <div>
            <img src="" alt="">
          </div>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
      </div>
    </div>
    <div id="discover-module">
      <div class="discover-module">
        <div class="content-left">
          <div class="left-g">
            <div class="g-wrap">
              <div class="n-rcmd">
                <div class="n-had">
                  <i class="yuan"></i>
                  <a href="#" class="title">热门推荐</a>
                  <div style="display:inline-block" class="tabe">
                    <a href="#">华语</a>
                    <span>|</span>
                    <a href="#">流行</a>
                    <span>|</span>
                    <a href="#">摇滚</a>
                    <span>|</span>
                    <a href="#">民谣</a>
                    <span>|</span>
                    <a href="#">电子</a>
                  </div>
                  <span class="more">
                    <a href="#">更多</a>
                    <i class="icon"></i>
                  </span>
                </div>
                <ul class="cvrlst">
                  <li v-for="(item,index) in referrerArry.slice(0,8)"
                  :key="index">
                    <div class="cover">
                      <img :src="item.picUrl" alt="">
                      <a href=""></a>
                      <div class="buttom">
                       <i href="#" class="el-icon-headset play-a"></i>
                       <span>{{ item.playCount | playNumber }}</span>
                       <i href="#" class="el-icon-video-play play"></i>
                      </div>
                    </div>
                    <p><a href="#" v-text="item.name"></a></p>
                  </li>
                </ul>
              </div>
              <div class="n-rcmd"></div>
              <div class="n-clmnad"></div>
              <div class="n-new">
                   <div class="n-had">
                     <i class="yuan"></i>
                    <a href="#" class="title">新碟上架</a>
                    <span class="more">
                      <a href="#">更多</a>
                      <i class="icon"></i>
                    </span>
                </div>
                <div class="disk">
                  <div class="inner">
                    <a href="#" class="el-icon-arrow-left dtn dtn-left"
                    @click.prevent="putawaylast()"></a>
                    <div class="roll">
                      <div class="wrapper_dom" ref="dom">
                        <ul class="flag">
                          <li v-for="(item,index) in putawayArry.slice(5,10)" :key="index">
                            <div class="cover">
                              <img :src="item.blurPicUrl" alt="">
                            </div>
                            <p class="dist">
                              <a href="#" class="title-a">{{ item.name }}</a>
                            </p>
                            <p>{{ item.artists[0].name}}</p>
                          </li>
                        </ul>
                        <ul class="flag">
                          <li v-for="(item,index) in putawayArry.slice(0,5)" :key="index">
                          <div class="cover">
                              <img :src="item.blurPicUrl" alt="">
                            </div>
                            <p class="dist">
                              <a href="#" class="title-a">{{ item.name }}</a>
                            </p>
                            <p>{{ item.artists[0].name}}</p>
                          </li>
                        </ul>
                       <ul class="flag">
                          <li v-for="(item,index) in putawayArry.slice(5,10)" :key="index">
                            <div class="cover">
                              <img :src="item.blurPicUrl" alt="">
                            </div>
                            <p class="dist">
                              <a href="#" class="title-a">{{ item.name }}</a>
                            </p>
                            <p>{{ item.artists[0].name}}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a href="#" class="el-icon-arrow-right dtn dtn-right"
                    @click.prevent="putawayNext()"></a>
                  </div>
                </div>
              </div>
              <div class="n-bill">
                <div class="n-had">
                     <i class="yuan"></i>
                    <a href="#" class="title">榜单</a>
                    <span class="more">
                      <a href="#">更多</a>
                      <i class="icon"></i>
                    </span>
                </div>
                <div class="balst">
                  <dl class="blk">
                    <dt class="top">
                      <div class="cver">
                        <img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                        <a href="#" title="云音乐飙升榜"></a>
                      </div>
                      <div class="tit">
                        <a href="#" title="云音乐飙升榜">
                          <h3>云音乐飙升榜</h3>
                        </a>
                        <div class="btn"></div>
                      </div>
                    </dt>
                    <dd></dd>
                  </dl>
                  <dl class="blk">
                    <dt class="top">
                      <div class="cver">
                        <img src="http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" alt="">
                        <a href="#" title="云音乐新歌榜"></a>
                      </div>
                      <div class="tit">
                        <a href="#" title="云音乐新歌榜">
                          <h3>云音乐新歌榜</h3>
                        </a>
                        <div class="btn"></div>
                      </div>
                    </dt>
                    <dd></dd>
                  </dl>
                  <dl class="blk">
                    <dt class="top">
                      <div class="cver">
                        <img src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" alt="">
                        <a href="#" title="网易原创歌曲榜"></a>
                      </div>
                      <div class="tit">
                        <a href="#" title="网易原创歌曲榜">
                          <h3>网易原创歌曲榜</h3>
                        </a>
                        <div class="btn"></div>
                      </div>
                    </dt>
                    <dd></dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-right"></div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'Referrer',
  data () {
    return {
      bannerArry:[],
      referrerArry:[],
      putawayArry:[],
      bannerSrc:"",
      curpage:0,
      timer:"",
      index:0,
      ulList:[],
      bannerBgArr:[
        'http://p1.music.126.net/m8FBNR1FW_xugNSC71DyxQ==/109951164385419448.jpg',
       'http://p1.music.126.net/spsE7mp13Sk8yK62v5cOBQ==/109951164385165534.jpg',
        'http://p1.music.126.net/3KIXiLehV-M8Eygp8M0lrA==/109951164385172922.jpg',
        'http://p1.music.126.net/Uxov4xrjpvunFK65GkYQLA==/109951164385172481.jpg',
        'http://p1.music.126.net/uymNPZ27oyiw6vfNvNFa9w==/109951164385189634.jpg',
        'http://p1.music.126.net/mAfvwHwPSxWriFlZPdNTkg==/109951164386605196.jpg',
        'http://p1.music.126.net/FBmSAyP_zfEiWgPLIAGNMg==/109951164386735510.jpg',
        'http://p1.music.126.net/CTEQJCBxRdtVnc3HZoTJHQ==/109951164386616837.jpg',
      ]
    }
  },
  filters:{
      playNumber:function(value){
        if(value>10000){
          return parseInt(value / 10000) + "万"
        }else return value
      }
  },
  methods:{
    getJSON(){
        this.$http.get("http://localhost:3000/banner").then(data=>{
            this.bannerArry = data.body.banners
        });
        this.$http.get("http://localhost:3000/personalized?limit").then(data=>{
            this.referrerArry = data.body.result
        })
        this.$http.get("http://localhost:3000/album/newest").then(data=>{
          this.putawayArry = data.body.albums
          // console.log(this.putawayArry)
        })
    },
 test() {
    $(".wrapper_dom").stop().animate({ left: -this.index * 645 }, 600, function() {
        if (this.index == 2) {
            this.index = 0;
            $(".wrapper_dom").css({ left: 0 })
        }
    })
},
    putawayNext(){
      this.index++
      if(this.index == 3){
        this.index = 1
        $(".wrapper_dom").css({ "left": 0 })
      }
    this.test()
    },
    putawaylast(){
        this.index--
      if (this.index == -1) {
        this.index = 1
         $(".wrapper_dom").css({ left: -2 * 645 })
    }
    this.test()
    },
    get(){
      if(this.curpage < 7){
        this.curpage++
      }else if(this.curpage === 7){
        this.curpage = 0
      }
    },
    gteNext(){
      this.get()
    },
    getLast(){
      if(this.curpage > 0){
        this.curpage--
      }else if(this.curpage === 0){
        this.curpage = 7
      }
    },
    clearSet(){
      clearInterval(this.timer)
    },
    openSet(){
      this.timer = setInterval(this.get,2000)
    }
  },
  created(){
    this.getJSON()
    this.timer = setInterval(this.get(), 2000)
  }
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .banner{
    width: 100%;
    height: 336px;
  }
  a:hover{
     text-decoration: underline;
  }
  .banner .wrapper{
    width: 982px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .banner .wrapper ul{
    width: 730px;
    height: 336px;
    position: absolute;
    /* float: left; */
    display: inline-block;
  }
   .banner .wrapper .slide{
     position:absolute;
     width: 730px;
    height: 336px;
    /* overflow: hidden; */
   }
   .banner .wrapper .slide img{
      width: 730px;
    height: 336px;
   }
   .wrapper .box{
     position:absolute;
     width: 37px;
    height: 63px;
     transform: translateY(-50%);
   }
   .wrapper .box p:hover{
     background-color:#333333;
     color: #fff
   }
   .wrapper .box p{
    position:absolute;
    top: 150px;
    width: 37px;
    height: 63px;
    text-align: center;
    line-height: 63px;
    font-size: 30px;
    color: #fff;
    font-weight:900;
    /* text-indent: -9999px; */
   }
   .wrapper .box .last{
    background-position: 0 300px;
    background-image: url("https://s2.music.126.net/style/web2/img/index/banner.png?0b054d175352fcb1f3050689b0cfcfbb");
    left: -60px;
   }
    .wrapper .box .next{
    background-position: 0 151px;
    background-image: url("https://s2.music.126.net/style/web2/img/index/banner.png?0b054d175352fcb1f3050689b0cfcfbb");
    left: 999px;
   }
   .download{
     float: right;
     background: url("https://s2.music.126.net/style/web2/img/index/download.png?25b5d4d98d5c45d3715b802ffde6e9f5");
     margin-left: 37px;
     z-index: 20;
    width: 254px;
    height: 336px;
   }
   .n-had .yuan{
     width: 34px;
     height: 20px;
     display: inline-block;
     background-position: 188px 307px;
     background-image: url("https://s2.music.126.net/style/web2/img/index/index.png?ac1406bd35e0c0340bacb83102534b6a");
   }
   .download p{
     margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
    font-size: 12px;
    transform: translateY(250px)
   }
   #discover-module{
     width: 100%;
     height: 1425px;
     background: #f5f5f5;
   }
   .discover-module{
         width: 980px;
    /* min-height: 700px; */
    /* height: 700px; */
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
   }
   .cvrlst::after,
   .discover-module::after{
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
   }
   .content-left{
     float: left;
     margin-right: -250px;
     width: 100%;
   }
   .content-left .left-g{
      margin-right: 251px;
   }
   .content-left .left-g .g-wrap{
     padding: 20px 20px 40px;
   }
  .n-had{
     height: 33px;
    padding: 0 10px 0 0;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
  }
  .title{
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    color: #000;
   }
   .tabe{
    margin: 7px 0 0 20px;
    font-size: 12px;
   }
   .tabe a{
     color: #666;
   }
   .tabe span{
    margin: 0 10px;
    color: #ccc;
   }
   .more{
     float: right;
    margin-top: 9px;
   }
   .more a{
     color: #000;
     font-size: 12px;
   }
   .icon{
     background-image: url("https://s2.music.126.net/style/web2/img/index/index.png?7b10290d4e0471e2230fdc8be3db5367");
     display: inline-block;
     width: 12px;
     height: 12px;
     background-position: 0 227px;
   }
   .g-wrap a:hover{
     text-decoration: line;
   }
   .cvrlst li p a{
     font-size: 12px;
     color: #666;
   }
   .cvrlst{
     margin: 20px 0 0 -42px;
   }
  .cvrlst li{
    /* float: left; */
    display: inline-block;
    width: 140px;
    height: 204px;
    padding-left: 42px;
    overflow: hidden;
    padding: 0 0 30px 42px;
    line-height: 1.4;
  }
  .cvrlst li .cover{
    width: 140px;
    height: 140px;
    position: relative;
  }
  .cvrlst li .cover img{
    width: 100%;
    height: 100%;
    /* display: block; */
    /* position: absolute; */
  }
  .cvrlst li .cover a{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  /* .cvrlst li .cover .buttom{
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
  } */
  .cvrlst li .cover .buttom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
    background: rgba(0,0,0,0.5)
  }
  .cover .buttom .play-a{
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
    /* font-size: 20px; */
  }
  .cover .buttom .play{
    float: right;
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    margin: 5px 8px 9px 10px;
    font-size: 20px;
  }
  .cvrlst li p{
    margin: 8px 0 3px;
    font-size: 14px;
    width: 100%;
  }
  .cvrlst li p a{
     display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    font-size: 14px;
   }
   .content-right{
     float: right;
     position: relative;
     width: 250px;
     zoom: 1;
   }
   .n-clmnad{
     position: relative;
     margin-top: 35px;
   }
   .disk{
     position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
   }
   .disk .inner{
     height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
   }
   .disk .inner .dtn{
    width: 17px;
    height: 17px;
    /* padding-left: 0; */
    color: #222;
     text-decoration: none;
     font-weight: 600;
    /* background: #f5f5f5;
    border: 1px solid #fff; */
    text-align: center;
    line-height: 17px;
   }
   .dtn-left{
     position: absolute;
     left: 4px;
     top: 71px;
     z-index: 999;
   }
   .dtn-right{
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    z-index: 999;
   }
   .roll{
    position: relative;
    float: left;
    width: 645px;
    height: 180px;
    overflow: hidden;
   }
   .roll .flag{
     /* position: absolute; */
    top: 0;
    left:0;
    width: 645px;
    margin: 28px 0 0 0;
    display: inline-block;
    background: #f5f5f5;
   }
   .roll .flag li{
     float: left;
    width: 118px;
    height: 150px;
    margin-left: 11px;
   }
   .roll .flag .dist{
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
   }
   .title-a{
     text-overflow:ellipsis;
   }
   .roll .flag li .cover{
         margin-bottom: 7px;
         width: 118px;
    height: 100px;
  background-position: 379px 926px;
    background-image: url("../assets/$RO5V82W.png")
   }
   .roll .flag li .cover img{
     width: 100px;
     height: 100px;
   }
   .wrapper_dom{
     position: relative;
     width: 300%;
     height: 100%;
     top: 0;
     left: 0;
     /* transition:1s ease-out 0s; */
   }
   /* 榜单 */
   .balst{
     height: 427px;
     margin-top: 20px;
     padding-left: 1px;
     background-color: #f4f4f4;
     border: 1px solid #ccc;
   }
   .balst .blk{
     float: left;
     /* width: 230px; */
   }
   .balst .blk .top{
     height: 100px;
    padding: 20px 0 0 19px;
   }
   .balst .blk .top .cver{
     float: left;
    /* display: inline; */
    position: relative;
    width: 80px;
    height: 80px;
   }
   .balst .blk .top .cver img{
     display: block;
     width: 100%;
     height: 100%;
   }
   .balst .blk .top .cver a{
     position: absolute;
     top: 0;
     left: 0;
     height: 100%;
     width: 100%;
   }
   .tit{
     float: left;
    width: 116px;
    margin: 6px 0 0 10px;
   }
   .tit a{
     color: #333333;
     cursor: pointer;
     font-size: 12px;
   }
   .tit a h3{
     font-size: 14px;
     width: 100%;
   }
.fadeIn-enter-active,.fadeIn-leave-active {
  transition: all 1.5s ease;
  }
.fadeIn-enter-active,.fadeIn-leave{
  opacity: 1;
  }
.fadeIn-enter,.fadeIn-leave-active {
  opacity: 0;
  }
</style>
