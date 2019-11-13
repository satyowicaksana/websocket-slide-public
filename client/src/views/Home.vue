<template>
  <div class="home">
    <Slide :mainSlide="mainSlide" @sendSlide="sendSlide" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from '@/components/Slide.vue'

export default {
  name: 'home',
  components: {
    Slide
  },
  props: {
    mainSlide: Number
  },
  methods: {
    sendSlide (slide) {
      this.$emit('sendSlide', slide)
    }
  }
}
</script>
