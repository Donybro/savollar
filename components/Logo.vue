<template>
  <img :src="$options.logoPath" class="w-[267px]" alt="main logo">
</template>

<script>
import logoPath from '../assets/logo.svg'

export default {
  name: "Logo",
  logoPath,
}
</script>

<style scoped>

</style>
