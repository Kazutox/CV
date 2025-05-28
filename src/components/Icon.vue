<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEmail } from '@mdi/js'

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>
<template>
  <svg-icon type="mdi" :path="icon"></svg-icon>
</template>
