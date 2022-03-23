<template>
  <section>
    <ValidationProvider rules="required" v-slot="{ errors }">
      <div class="form_wrapper">
        <label class="form_label" for="questionName">Savol nomi</label>
        <input :class="{'error_input':errors[0]}" class="base_input " id="questionName" placeholder="Savol nomi" type="text" v-model="questionName">
      </div>
      <span class="error_message">{{ errors[0] }}</span>
    </ValidationProvider>
    <div class="grid grid-cols-12">
      <ValidationProvider class="col-span-9" rules="required" v-slot="{ errors }">
        <div class="form_wrapper">
          <label class="form_label" for="questionName">Savol bo‘limi</label>
          <SelectBox v-model="selectBoxValue" placeholder="Savol bo‘limini tanlang"  :options="optionsList" track-by="id" show-by="name"/>
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
  components:{ButtonGroup, SelectBox, ValidationProvider},
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
