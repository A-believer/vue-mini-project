<script>
import AccordionComp from "./components/AccordionComp.vue"
import RandomColorComp from "./components/RandomColorComp.vue"
import StarRatingComp from "./components/StarRatingComp.vue"

export default {
  components: {
    AccordionComp,
    RandomColorComp,
    StarRatingComp
  }
}
</script>

<template>
  <main>
    <AccordionComp />
    <RandomColorComp />
    <StarRatingComp />
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
