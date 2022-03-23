<template>
 <section class="">
   <MainSearch/>
   <section class="px-[8px]">
     <section class="my-5 gap-[10px] grid grid-cols-12">
       <section class="col-span-9">
         <Tab :selected-item.sync="selectedTab" class="mb-[12px]"/>
         <QuestionItem class=""/>
       </section>
       <SectionsList class="col-span-3"/>
     </section>
   </section>
 </section>
</template>

<script>
import Header from "../components/Header";
import Tab from "../components/Tab";
import QuestionItem from "../components/QuestionItem";
import MainSearch from "../components/MainSearch";
import SectionsList from "../components/SectionsList";
export default {
  name: 'IndexPage',
  layout:'MainLayout',
  components: {SectionsList, MainSearch, QuestionItem, Tab, Header},
  data() {
    return {
      selectedTab: ''
    }
  },
  watch:{
   selectedTab(val){
     console.log(val)
   }
 }
}
</script>
