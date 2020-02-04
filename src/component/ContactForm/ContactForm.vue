<style src="./ContactForm.scss" module lang="scss"></style>
<script src="./ContactForm.js"></script>

<template>
  <div :class="[$style.contactForm]">
    <div :class="[$style.contentWrapper]">
      <div v-for="field in fields" :key="field.id">
        <div :class="[$style.formRow]" ref="field">
          <label>
            <span :class="[$style.label]">{{ field.name }}</span>
            <input type="text" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
