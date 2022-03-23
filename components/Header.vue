<template>
  <div class="w-full shadow-[0_5px_30px_rgba(101,101,101,0.15)]">
    <div class="section_wrapper flex items-center justify-between py-[24px]">
      <Logo/>
      <nav class="">
        <ul class="font-menu flex gap-[32px]">
          <li class="list">
            Qoidalar
            <span v-if="currentRoute === $options.navbarRoutes.RULES" class="underlie"></span>
          </li>
          <li class="list">
            Ma’lumotlar
            <span v-if="currentRoute === $options.navbarRoutes.INFO" class="underlie"></span>
          </li>
          <li class="list">
            Sayt haqida
            <span v-if="currentRoute === $options.navbarRoutes.ABOUT" class="underlie"></span>
          </li>
        </ul>
      </nav>
      <section class="flex items-center gap-[30px]">
        <button class="py-[8px] px-[14px] rounded-[4px] bg-primary text-white">
          Savol berish
        </button>
        <Langauages/>
        <Profile/>
      </section>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
import Langauages from "./Langauages";
import Profile from "./Porfile";
export default {
  name: "Header",
  components: {Profile, Langauages, Logo},
  navbarRoutes:{
    RULES:'rules',
    INFO:'info',
    ABOUT:'about',
  },
  computed:{
    currentRoute:function (){
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.list{
  @apply flex flex-col items-center justify-center font-['Raleway'] cursor-pointer hover:font-semibold;
}
.underlie{
  @apply w-1/2 bg-[#181818] h-[2px];
}
</style>
