<template>
  <div class="flex gap-[10px] items-center rounded-[4px] px-[16px] py-[11px]" :class="stylesByType">
    <img v-if="this.alertType === this.$options.alertTypes.DANGER" src="../assets/icons/Search.svg" class="float-left w-[24px] h-[24px]" alt="">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
  alertTypes:{
    DANGER : 'DANGER'
  },
  props:{
    alertType:{
      type: String
    }
  },
  computed:{
    stylesByType(){
      if(this.alertType === this.$options.alertTypes.DANGER){
        return 'border border-[#FF734A] text-[16px] text-[#FF734A] bg-[rgba(255,115,74,0.15)]'
      }
    }
  }
}
</script>

<style scoped>

</style>
