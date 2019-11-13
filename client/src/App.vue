<template>
  <div id="app">
    <router-view :mainSlide="mainSlide" @sendSlide="sendSlide"/>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return {
      socket: io('http://localhost:3000'),
      mainSlide: 0
    }
  },
  methods: {
    sendSlide (slide) {
      this.socket.emit('change slide', { slide })
    }
  },
  created () {
    this.socket.on('set slide', (data) => {
      this.mainSlide = data.slide
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
