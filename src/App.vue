<script>
import ScrollIndicatorComp from './components/ScrollIndicatorComp.vue';

// import QRCodeComp from './components/QRCodeComp.vue';
// import LightToDark from './components/light-dark-mode/LightToDark.vue';
// import AccordionComp from "./components/AccordionComp.vue"
// import RandomColorComp from "./components/RandomColorComp.vue"
// import StarRatingComp from "./components/StarRatingComp.vue"
// import ImageSliderComp from './components/ImageSliderComp.vue'
// import LoadMoreDataComp from './components/LoadMoreDataComp.vue';
// import TreeViewComp from './components/tree-view/TreeViewComp.vue';


export default {
  components: {
    // AccordionComp,
    // RandomColorComp,
    // StarRatingComp,
    // ImageSliderComp,
    // LoadMoreDataComp,
    // TreeViewComp,
    // QRCodeComp,
    // LightToDark,
    ScrollIndicatorComp
  }
}
</script>

<template>
  <main>
    <!-- <AccordionComp />
    <hr />
    <RandomColorComp />
    <hr />
    <StarRatingComp />
    <hr /> -->
    <!-- <ImageSliderComp /> -->
    <!-- <hr>
    <LoadMoreDataComp />
    <hr> -->
    <!-- <TreeViewComp /> -->
    <!-- <hr> -->
    <!-- <QRCodeComp /> -->
    <!-- <hr> -->
    <!-- <LightToDark /> -->
    <!-- <hr> -->
    <ScrollIndicatorComp />
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

hr {
  background-color: black;
  color: black;
  height: 4px;
  width: '100%';
}
</style>
