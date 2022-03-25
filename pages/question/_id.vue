<template>
  <section class="">
    <section class="mt-[64px]">
      <MainSearch/>
    </section>
    <section class="mt-[56px] my-5 gap-[10px] grid grid-cols-12">
      <section class="col-span-9">
        <section :style="{fontSize:fontSize+'em !important'}">
          <div class="bg-[#F3F3F3] flex justify-between gap-[8px] items-center rounded-[4px] py-[11px] px-[16px]">
            <div class="flex items-center gap-[4px]">
              <div class="text-[14px] flex gap-[4px]">
                <p class="text-[#181818] ">ID:</p>
                <p class="text-[#858585]">54654654</p>
              </div>
              <Devider/>
              <div class="text-[14px] flex gap-[4px]">
                <p class="text-[#181818] ">Nashr:</p>
                <p class="text-[#858585]">19-02-2022</p>
              </div>
              <Devider/>
            </div>
            <div class="flex gap-[12px] items-center">
              <button @click="decreaseFontSize">
                <img src="../../assets/icons/minus.png" alt="">
              </button>
              <img src="../../assets/icons/Aa.svg" alt="">
              <button @click="increaseFontSize">
                <img src="../../assets/icons/Plus.svg" alt="">
              </button>
            </div>

          </div>
          <QuestionWrapper/>
          <AnswerWrapper/>
        </section>
      </section>
      <SimilarQuestionsList class="col-span-3"/>
    </section>
  </section>
</template>

<script>
import QuestionWrapper from "../../components/QuestionWrapper";
import AnswerWrapper from "../../components/AnswerWrapper";
import MainSearch from "../../components/MainSearch";
import Devider from "../../components/Devider";
import SimilarQuestionsList from "../../components/SimilarQuestionsList";
export default {
  name: ":id",
  layout:'MainLayout',
  components: {SimilarQuestionsList, MainSearch, AnswerWrapper, QuestionWrapper,Devider},
  data() {
    return {
      fontSize: 1
    }
  },
  methods: {
    increaseFontSize() {
      this.fontSize += 0.1
    },
    decreaseFontSize() {
      this.fontSize -= 0.1
    },
  },
}
</script>

<style scoped>
</style>
