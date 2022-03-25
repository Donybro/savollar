<template>
  <section>
    <ValidationProvider rules="required" v-slot="{ errors }">
      <div class="form_wrapper">
        <label class="form_label" for="questionName">Savol nomi</label>
        <input :class="{'error_input':errors[0]}" class="base_input " id="questionName" placeholder="Savol nomi" type="text" v-model="questionName">
      </div>
      <span class="error_message">{{ errors[0] }}</span>
    </ValidationProvider>
    <div class="grid grid-cols-12 gap-3">
      <ValidationProvider class="col-span-9" rules="required" v-slot="{ errors }">
        <div class="form_wrapper" >
          <label class="form_label" for="selectBoxValue">Savol bo‘limi</label>
          <select class="base_input bg-white" v-model="selectBoxValue" name="selectBoxValue" id="selectBoxValue">
            <option class="text-[#181818]" selected disabled value="">Savol bo‘limini tanlang</option>
            <option v-for="item in optionsList" :key="item" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
      </ValidationProvider>
      <ValidationProvider class="col-span-3" rules="required" v-slot="{ errors }">
        <div class="form_wrapper">
          <label class="form_label" for="questionName">Savol turi</label>
          <ButtonGroup :titles="buttonGroupOptions" :selected-item="selectedButton"/>
        </div>
      </ValidationProvider>
    </div>
  </section>
</template>

<script>
import {ValidationProvider} from 'vee-validate'
import SelectBox from "./SelectBox";
import ButtonGroup from "./ButtonGroup";
export default {
  name: "AskFormFields",
  components:{ButtonGroup, SelectBox, ValidationProvider,},
  data() {
    return {
      questionName: '',
      selectBoxValue:'',
      selectedButton:undefined,
      optionsList:[
        {
          id:1,
          name:'Donybro'
        },
        {
          id:2,
          name:'Donybro 2'
        }
      ],
      buttonGroupOptions:[
        {
          type:'OPEN',
          title:'Umumiy'
        },
        {
          type:'PRIVATE',
          title:'Shaxsiy'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
