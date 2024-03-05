<script>
import AccordionComp from "./components/AccordionComp.vue"
import RandomColorComp from "./components/RandomColorComp.vue"

export default {
  components: {
    AccordionComp,
    RandomColorComp
  }
}
</script>

<template>
  <main>
    <AccordionComp />
    <RandomColorComp />
  </main>

</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
}
</style>
