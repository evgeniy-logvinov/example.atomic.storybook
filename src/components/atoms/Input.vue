<template>
  <input class="a-input" type="text" v-model="value" @input="$emit('input') />
</template>