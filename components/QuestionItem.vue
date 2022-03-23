<template>
  <div class="py-[21px] px-[16px] border border-[#E8E8E8] rounded-[4px]">
      <div class="mb-[12px] flex items-center justify-between">
        <div class="text-[#8b8b8b] font-medium">
          54654654
        </div>
        <button>
          <img src="../assets/icons/favorite.svg" class="w-[32px] h-[32px]" alt="">
        </button>
      </div>
      <p class="mb-[8px] text-[#181818] text-[18px] font-semibold leading-[25px]">
        Does seeking an answer to a supplication by virtue of one’s righteous deed (tawassul) to achieve some worldly goal detract from the reward of that deed?
      </p>
      <p class="mb-[12px] text-[16px] text-[#a3a3a3]">
        It is narrated that offering supplication and seeking to draw closer to Allah (tawassul) by virtue of a sincere righteous deed is one of the means of having one’s supplication answered. My question is: if someone...
      </p>
    <div class="flex justify-between">
        <div class="w-[80%] flex gap-[10px] items-center">
          <Badge class="border border-primary text-primary">Taxorat</Badge>
          <Badge class="border border-primary text-primary">Taxorat</Badge>
        </div>
        <p class="font-medium text-[#8b8b8b]">31.02.2022</p>
    </div>

  </div>
</template>

<script>
import Badge from "./Badge";
export default {
  name: "QuestionItem",
  components: {Badge}
}
</script>

<style scoped>

</style>
