<template>
  <div class="find">
    <div class="nav">
      <ul class="nav-box">
        <li><router-link to="/referrer">推荐</router-link></li>
        <li><router-link to="find/ranking">排行榜</router-link></li>
        <li><router-link to="/playlist">歌单</router-link></li>
        <li><router-link to="/anchor">主播电台</router-link></li>
        <li><router-link to="/singer">歌手</router-link></li>
        <li><router-link to="/putaway">新碟上架</router-link></li>
      </ul>
   <router-view></router-view>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Find'
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  .nav{
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }
  .nav .nav-box{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding-left: 360px;
  }
  .nav ul li{
    display: inline-block;
  }
  .nav ul li a{
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    color: #fff;
    font-size: 12px;
  }
  .nav ul li a:hover,
  .router-link-exact-active{
    background-color: #9B0909;
  }
</style>
