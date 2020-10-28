<template>
  <div class="main">
    <nav class="hat">
        <div class="logo">
            <img src="src/assets/logo.png" alt="" />
            <p>SIEM SYSTEM</p>
        </div>
        <ul class="menu">
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

<style>

</style>
