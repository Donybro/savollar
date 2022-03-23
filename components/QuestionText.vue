<template>
  <div class="flex flex-col border p-[16px] border-primary rounded-[4px] bg-[rgba(37,125,255,0.15)]">
    <h3 class="text-primary text-[18px]">Question</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "QuestionText"
}
</script>

<style scoped>

</style>
