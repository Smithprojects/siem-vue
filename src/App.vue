<template>

  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>

  </div>

</template>

<script>
import MainLayout from './layouts/MainLayout'
export default {
  computed: {
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style>
body {
  background: #000000;
  margin: 0;
  padding: 0;
  color: white;
  font-family: "Raleway", sans-serif;

  font-weight: 100;
}

div,
p,
img,
a,
form {
  box-sizing: border-box;
  text-decoration: none;
  margin: 0;
  padding: 0;
}

/* ul,
li {
  display: block;
  margin: 0;
  padding: 0;
} */




</style>
