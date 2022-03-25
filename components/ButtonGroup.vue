<template>
  <div class="flex justify-around shadow border rounded w-full box-border border-none">
    <button
      v-for="item in titles"
      :key="item.title"
      :style="`width: ${(100/$props.titles.length)-1}%`"
      class="text-center py-[8px] px-[37px] text-sm h-full box-border rounded mx-[4px]"
      :class="{'bg-primary ring-offset-1 ring-2 ring-primary text-white shadow' : item.title === activeBtnTitle , 'text-gray-900 bg-white':item.title!==activeBtnTitle}"
      @click.prevent="setItem(item)"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    titles: Array,
    selectedItem: [Object,Boolean,String]
  },
  data() {
    return {
      activeBtnTitle: '',
    };
  },
  created() {
    if(typeof this.$props.selectedItem !== 'undefined'){
      this.setItem(this.$props.titles.filter(t=>t.type === this.$props.selectedItem)[0])
    }

  },
  methods: {
    setItem(item) {
      this.activeBtnTitle = item.title;
      this.$emit('update:selected-item', item.type);
    },
  }
};
</script>

<style scoped>

</style>
