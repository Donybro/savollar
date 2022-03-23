<template>
  <div class="relative" v-on-clickaway="close">
    <button class="flex items-center" @click="toggle">
      {{selectedLang.label}}
      <img :src="$options.chevronDown" class="w-[16px] h-[16px]" alt="">
    </button>
    <ul v-if="isOpen" class="absolute top-7 left-0 shadow bg-white py-[10px] w-full">
      <li v-for="[key,value] in Object.entries($options.languagesList)" :key="key" @click="setLang(value)">
        {{value.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import chevronDown from '../assets/icons/chevron-down.svg'
export default {
  name: "Languages",
  mixins: [ clickaway ],
  chevronDown:chevronDown,
  languagesList:{
    ru:{
      code:'ru',
      label:'РУ',
    },
    en:{
      code:'en',
      label:'EN',
    }
  },
  data() {
    return {
      selectedLang: this.$options.languagesList.ru,
      isOpen:false,
    }
  },
  methods: {
    setLang(code) {
      this.selectedLang = code
      this.close()
    },
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
