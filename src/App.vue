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

ul,
li {
  display: block;
  margin: 0;
  padding: 0;
}

.hat {
  margin: 20px;
  height: 40px;
  padding: 0;
}

.logo {
  margin: auto;
  display: flex;
  padding: 0;
  margin: 0;
  float: left;
  height: 100%;
  width: 15%;
  font-size: 1.2em;
}

.logo img {
  display: flex;
  height: 40px;
  width: 50px;
}
.logo p {
  margin: auto;
  margin-left: 0;
}

.menu {
  display: flex;
  float: right;
  width: 70%;
  height: 100%;
}

.menu li {
  margin: auto;
  text-align: center;
}
.menu a {
  color: white;
  margin: 10px;
  transition: all 0.2s ease;
}
.menu a:hover {
  color: #1a87a8;
}

#log_out {
  margin-left: 50px;
}

.new {
  width: 500px;
  height: 500px;
  background: red;
}
</style>
