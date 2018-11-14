<template>
  <button class="a-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>