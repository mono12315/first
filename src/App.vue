<template>
  <div id="app">
    <div>
      <Header></Header>
      <ShoppingCart></ShoppingCart>
      <CartWrap></CartWrap>
      <Footer></Footer>
  </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import CartWrap from './components/CartWrap.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    ShoppingCart,
    CartWrap,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(245,245,245);
}
</style>
