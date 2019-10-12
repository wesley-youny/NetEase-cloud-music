<template>
  <div id="app">
    <div id="nav">
      <div class="nav-box">
        <ul class="nav-bar">
          <li class="logo"></li>
          <li><router-link to="/referrer">发现音乐</router-link></li>
          <li><router-link to="/mymusic">我的音乐</router-link></li>
          <li><router-link to="/friend">朋友</router-link></li>
          <li><router-link to="#">商城</router-link></li>
          <li><router-link to="#">音乐人</router-link></li>
          <li class="bgimg"><router-link to="/download">下载客户端</router-link></li>
        </ul>
        <ul class="nav-input">
          <li class="input-box">
            <span>
              <input type="text" 
              :placeholder="placeholder" @focus=" placeholder = ''"
              @blur='placeholder = "音乐/视频/电台/用户"'
              >
            </span>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"app",
  data(){
    return{
      placeholder:"音乐/视频/电台/用户"
    }
  },
}
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
  }
  #nav{
    width: 100%;
    background :#242424;
    height :70px;
  }
  .nav-box{
    width :1100px;
    margin :0 auto;
  }
  .nav-box ul{
    display: inline-block;
  }
  .nav-bar{
     height :70px;
  }
  .nav-bar li{
    display:inline-block;
    /* height :70px; */
    text-align: center;
    line-height: 70px;
    color: #ccc;
  }
  .nav-bar .logo{
    background:url("assets/topbar.png") 100% 100%;
    /* padding: 30px 20px; */
    width: 177px;
    height: 69px;
    vertical-align: middle;
    background-position: 0 0;
    
  }
  .router-link-exact-active{
    background: #000;
  }
  .nav-bar li a{
    color: #ccc;
    display: inline-block;
    padding: 0 19px;
    font-size: 14px;
  }
  .nav-bar li a:hover{
   background: #000;
  }
  .bgimg{
    position: relative;
  }
  .bgimg::after{
      content:'';
      position: absolute;
      width: 28px;
      height: 19px;
      background-image: url("assets/topbar.png");
      background-position:529px 4px;
      top: 15px;
      left: 100px;
  }
  .nav-input{
    padding: 0 0 0 86px;
    height: 70px;

  }
  .nav-input li{
    display: inline-block;
     margin-top: 19px;
  }
  .input-box{
    background: url("assets/topbar.png");
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;
    width: 158px;
    height: 32px;
       
  }
  .input-box span{
    /* position: relative; */
    display: block;
    position: relative;
    margin: 4px 0 0 30px;
  }
  .input-box input{
        color: #333;
    line-height: 16px;
    width: 95%;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
     /* color: #9b9b9b; */
    cursor: text;
    font-size: 12px;
  }
</style>
