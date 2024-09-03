<template>
  <div>Hello, world!</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  msg: 'Hello, world!' | 'Hello, universe!';
}>();
</script>
