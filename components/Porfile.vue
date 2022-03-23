<template>
  <div class="relative" v-on-clickaway="close">
    <button class="flex items-center" @click="toggle">
      <img :src="$options.profileIcon" class="w-[24px] h-[24px] mr-[9px]" alt="">
      Javlon
    </button>
    <ul v-if="isOpen" class="absolute top-7 left-0 shadow bg-white py-[10px] w-full">
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</template>

<script>
import profileIcon from '../assets/icons/user.svg'
import { mixin as clickaway } from 'vue-clickaway';
export default {
  name: "Profile",
  profileIcon:profileIcon,
  mixins: [ clickaway ],
  data() {
    return {
      isOpen:false
    }
  },
  methods: {
    toggle(){
      this.isOpen = !this.isOpen
    },
    open(){
      this.isOpen = true
    },
    close(){
      this.isOpen = false
    }
  },
}
</script>

<style scoped>
li {
  @apply px-[5px] py-[2px] cursor-pointer hover:bg-gray-100
}
</style>
