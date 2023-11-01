<template>
  <slot></slot>
</template>

<script setup>
import { ref } 'vue'
const slotRef = ref(null)
const setSlotRef = (el)=>{
  slotRef.value = el
}
</script>