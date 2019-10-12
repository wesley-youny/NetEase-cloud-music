<template>
  <div class="mymusic">
    <h1>我的音乐</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'mymusic',
  components: {
    HelloWorld
  }
}
</script>
