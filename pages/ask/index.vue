<template>
  <section>
    <Alert alert-type="DANGER">
      Bir kunda bir marta savol berishingiz mumkin.
    </Alert>
    <section class="grid grid-cols-12">
      <AskFormFields class="col-span-9"/>
    </section>

  </section>
</template>

<script>
import Alert from "../../components/Alert";
import AskFormFields from "../../components/AskFormFields";

export default {
  name: "index",
  layout:'MainLayout',
  components: {AskFormFields, Alert}
}
</script>

<style scoped>

</style>
