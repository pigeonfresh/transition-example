<style src="./Navigation.scss" module lang="scss"></style>
<script src="./Navigation.js"></script>

<template>
  <div :class="[$style.navigation]">
    <router-link :to="RouteNames.HOME">
      Home
    </router-link>
    <router-link :to="RouteNames.CONTACT">
      Contact
    </router-link>
  </div>
</template>
