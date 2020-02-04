<style src="./Hero.scss" module lang="scss"></style>
<script src="./Hero.js"></script>

<template>
  <div :class="[$style.hero]">
    <picture :class="[$style.visualWrapper]">
      <img :src="`${$staticRoot}plants.jpg`" :class="[$style.visual]" />
    </picture>
    <div :class="[$style.contentWrapper]" ref="copy">
      Hello <span :class="[$style.name]" ref="name">World</span>
    </div>
  </div>
</template>
