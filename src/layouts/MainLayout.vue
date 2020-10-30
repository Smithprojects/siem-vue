<template>
  <div class="main">
    <nav class="main__nav">
        <div class="main__logo logo">
            <img class="logo__img" src="../assets/logo.png" alt="" />
            <p class="logo__text">SIEM SYSTEM</p>
        </div>
        <ul class="main__menu">
            <li>
                STATISTIC
            </li>
            <li>
                EVENTS
            </li>
            <li>
               CORRELATION
            </li>
            <li>
               INCIDENTS
            </li>
            <li>
                SIMPTOMS
            </li>
            <li>
                VULNERABILITY
            </li>
            <li>
                SETTINGS
            </li>
            <li>
               log out
            </li>
        </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'main-layout',

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

      &:hover {
        color: #1a87a8;
      }
    }
    
    // a {
    //   color: white;
    //   margin: 10px;
    //   transition: all 0.2s ease;
     
    // }
  }
}



</style>
