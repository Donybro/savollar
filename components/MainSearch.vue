<template>
  <div class="">
    <div class="flex gap-[9px]">
      <ais-instant-search :search-client="searchClient" index-name="steam-video-games" v-on-clickaway="closeHintsWindow">
        <ais-search-box @focus="focusHandler" placeholder="Savolni izlash" />
        <ais-hits v-if="hintsIsOpened">
          <div slot="item" slot-scope="{ item }">
            <h2>{{ item.name }}</h2>
          </div>
        </ais-hits>
      </ais-instant-search>
<!--      <div @click="onSearchClick" class="border bg-white border-[#8F8F8F] rounded-[4px] flex items-center py-[16px] px-[12px] w-full">-->
<!--        <img src="../assets/icons/Search.svg" class="mr-[20px] w-[24px] h-[24px]" alt="">-->
<!--        <input ref="search" type="text" class="p-0 w-full border-none text-[#7B7B7B] placeholder:text-[#7B7B7B] placeholder:text-[20px] text-[20px] focus:outline-none" placeholder="Savolni izlash">-->
<!--      </div>-->
<!--      <button class="py-[16px] px-[43px] rounded-[4px] bg-primary text-white">-->
<!--        Qidirish-->
<!--      </button>-->
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
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
export default {
  name: "MainSearch",
  components: {Badge},
  data() {
    return {
      searchClient: instantMeiliSearch(
        "https://apins.islom.uz/api/questions",
        ""
      ),
      hintsIsOpened:false
    }
  },
  methods: {
    onSearchClick() {
      this.$refs.search.focus()
    },
    closeHintsWindow(){
      this.hintsIsOpened = false
    },
    focusHandler(){
      if(!this.hintsIsOpened){
        this.hintsIsOpened = true
      }
      console.log('HehEy')
    }
  },
}
</script>

<style>
.ais-InstantSearch{
  width: 100% !important;
}
.ais-SearchBox-form{
  @apply border bg-white border-[#8F8F8F] rounded-[4px] flex items-center py-[16px] px-[12px] w-full
}
.ais-SearchBox-input {
  @apply p-0 w-full border-none text-[#7B7B7B] placeholder:text-[#7B7B7B] placeholder:text-[20px] text-[20px] focus:outline-none
}
.ais-Hits-item{
  @apply py-[8px] pl-[12px] text-[22px] text-[#8F8F8F] hover:bg-blue-100 hover:text-primary cursor-pointer
}
.ais-Hits{
  @apply relative}
.ais-Hits-list{
  @apply absolute z-20 top-0 left-0 bg-white w-full max-h-[700px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-hidden py-[8px] shadow
}
</style>
