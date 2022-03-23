<template>
  <div v-click-away="closeSelectBox" class="relative">
    <div class="flex justify-between w-full p-3 border rounded-md" @click="toggleSelectBox">
      <p v-if="!value">
        {{ placeholder }}
      </p>
      <p v-else>
        {{ selectedItem }}
      </p>
      <img src="../assets/icons/chevron-down.svg" class="w-[24px] h-[24px]" alt="">
    </div>
    <ul class="relative top-1 bg-gray-50 p-3" :class="{'opacity-0': !isOpen}">
      <li v-for="item in options" :key="item" @click="setSelectedItem(item)">
        {{ item[showBy] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';


export default {
  name:'SelectBox',
  mixins: [ clickaway ],
  props:{
    placeholder:{
      type:String,
      default:'',
      required:false
    },
    trackBy:{
      type:String,
      required:true
    },
    showBy:{
      type:String,
      required:true
    },
    value:{
      type:[String,Number,Object,Array],
      default:null,
      required:true
    },
    options:{
      type:[Array],
      required:true
    }
  },
  data() {
    return {
      isOpen: false,
      selectedItem:null
    }
  },
  methods: {
    closeSelectBox(){
      this.isOpen = false
    },
    toggleSelectBox(){
      this.isOpen = ! this.isOpen
    },
    setSelectedItem(item){
      this.$emit('input',item[this.trackBy])
      this.$emit('update:value',item[this.trackBy])
      this.selectedItem = item[this.showBy]
      this.closeSelectBox()
    }
  },
}

</script>

<style scoped>

</style>
