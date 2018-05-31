<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      transitionName: 'fade'
    }
  },
  mounted () {

  },
  watch: {
    '$route' (to, from) {
    }
  }
}
</script>

<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
