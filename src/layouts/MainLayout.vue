<template>
  <div class="main">
    <nav class="main__nav">
      <div class="main__logo logo">
          <img class="logo__img" src="../assets/logo.png" alt="" />
          <p class="logo__text">SIEM SYSTEM</p>
      </div>
      <ul class="main__menu">
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active-link"
          :to="link.url"
          :exact="link.exact"
        >
          <a href="#" class="main__link">{{link.title}}</a>  
        </router-link>
    
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'main-layout',
  data: () => ({
    links: [
      {title: 'STATISTIC', url: '/', exact: true},
      {title: 'EVENTS', url: '/events'},
      {title: 'CORRELATION', url: '/correlation'},
      {title: 'INCIDENTS', url: '/incidents'},
      {title: 'SIMPTOMS', url: '/simptoms'},
      {title: 'VULNERABILITY', url: '/vurnerability'},
      {title: 'SETTINGS', url: '/settings'},
      {title: 'log out', url: '/login'}
    ]
  }),

}
</script>

<style lang="scss">

.main {

  &__nav {
    margin: 20px;
    height: 40px;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    margin: auto;
    display: flex;
    padding: 0;
    margin: 0;
    float: left;
    height: 100%;
    width: 15%;
    font-size: 1.2em;

    .logo {

      &__img {
        display: flex;
        height: 40px;
        width: 50px;
      }

      &__text {
        margin: auto;
        margin-left: 0;
      }
    }
  }

  &__menu {
    display: flex;
    width: 70%;
    height: 100%;

    li {
      margin: auto;
      text-align: center;
    }
  }
  
  &__link {
    color: white;

    &:hover {
      color: #1a87a8;
    }
  }

  .active-link {

    .main__link {
      color: #1a87a8;
    }
  }
}



</style>
