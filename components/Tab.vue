<template>
  <div class="flex gap-[24px] relative">
    <div class="cursor-pointer text-[#8F8F8F] py-[12px]" :class="{'active':item === selectedItem}" v-for="item in tabItems" :key="item" @click="setSelectedItem(item)">
      {{item}}
    </div>
    <div class="absolute w-full h-[3px] bg-[#ccc] bottom-0 left-0 z-10"></div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props:{
    selectedItem:{
      type:[Object,String,Number]
    }
  },
  data() {
    return {
      tabItems: ['Dolzard','Oy Savollari'],
    }
  },
  methods: {
    setSelectedItem(item) {
      console.log(item)
      this.$emit('update:selectedItem',item)
    }
  },
}
</script>

<style scoped>

.active{
  @apply text-primary border-b-[3px] border-primary z-[11]
}
</style>
