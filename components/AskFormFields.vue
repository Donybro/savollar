<template>
  <section>
    <ValidationProvider rules="required" v-slot="{ errors }">
      <div class="form_wrapper">
        <label class="form_label" for="questionName">Savol nomi</label>
        <input
          :class="{ error_input: errors[0] }"
          class="base_input"
          id="questionName"
          placeholder="Savol nomi"
          type="text"
          v-model="questionName"
        />
      </div>
      <span class="error_message">{{ errors[0] }}</span>
    </ValidationProvider>
    <div class="grid grid-cols-12 gap-3">
      <ValidationProvider
        class="col-span-9"
        rules="required"
        v-slot="{ errors }"
      >
        <div class="form_wrapper">
          <label class="form_label" for="selectBoxValue">Savol bo‘limi</label>
          <select
            class="base_input bg-white"
            v-model="selectBoxValue"
            name="selectBoxValue"
            id="selectBoxValue"
          >
            <option class="text-[#181818]" selected disabled value="">
              Savol bo‘limini tanlang
            </option>
            <option v-for="item in optionsList" :key="item.id" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>
      </ValidationProvider>
      <ValidationProvider
        class="col-span-3"
        rules="required"
        v-slot="{ errors }"
      >
        <div class="form_wrapper">
          <label class="form_label" for="questionName">Savol turi</label>
          <ButtonGroup
            :titles="buttonGroupOptions"
            :selected-item="selectedButton"
          />
        </div>
      </ValidationProvider>
      <div class="col-span-12">
        <editor
          api-key="dsuuadosdh6cruq9tvzr8vllt7g6si9pudao0fiotbdhll86"
          :init="{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
          }"
        />
      </div>
    </div>
  </section>
</template>

<script>

import { ValidationProvider } from "vee-validate";
import SelectBox from "./SelectBox";
import ButtonGroup from "./ButtonGroup";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "AskFormFields",
  components: { ButtonGroup, SelectBox, ValidationProvider, editor: Editor },
  data() {
    return {
      questionName: "",
      selectBoxValue: "",
      selectedButton: undefined,
      optionsList: [
        {
          id: 1,
          name: "Donybro",
        },
        {
          id: 2,
          name: "Donybro 2",
        },
      ],
      buttonGroupOptions: [
        {
          type: "OPEN",
          title: "Umumiy",
        },
        {
          type: "PRIVATE",
          title: "Shaxsiy",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
