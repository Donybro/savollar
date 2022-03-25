<template>
  <div class="">
    <div class="flex gap-[9px]">
      <div @click="onSearchClick" class="border bg-white border-[#8F8F8F] rounded-[4px] flex items-center py-[16px] px-[12px] w-full">
        <img src="../assets/icons/Search.svg" class="mr-[20px] w-[24px] h-[24px]" alt="">
        <input ref="search" type="text" class="p-0 w-full border-none text-[#7B7B7B] placeholder:text-[#7B7B7B] placeholder:text-[20px] text-[20px] focus:outline-none" placeholder="Savolni izlash">
      </div>
      <button class="py-[16px] px-[43px] rounded-[4px] bg-primary text-white">
        Qidirish
      </button>
    </div>
    <div class="flex gap-[10px] mt-[17px]">
      <Badge class="border border-[#8F8F8F] text-[#8F8F8F]">Aqiyda</Badge>
      <Badge class="border border-[#8F8F8F] text-[#8F8F8F]">Duolar</Badge>
      <Badge class="border border-[#8F8F8F] text-[#8F8F8F]">Ibodatlar</Badge>
    </div>
  </div>
</template>

<script>
import Badge from "./Badge";
export default {
  name: "MainSearch",
  components: {Badge},
  methods: {
    onSearchClick() {
      this.$refs.search.focus()
    }
  },
}
</script>

<style scoped>

</style>
