<template>
    <div class="flex items-center justify-between">
      <Logo/>
      <ul class="font-menu flex gap-[32px]">
        <li>Qoidalar</li>
        <li>Ma’lumotlar</li>
        <li>Sayt haqida</li>
      </ul>
    </div>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Header",
  components: {Logo}
}
</script>

<style scoped>

</style>
