<script setup>
import ResizeTestComp from './components/window-resize/ResizeTestComp.vue';

// import MainGameComp from './components/tic-tac-toe/MainGameComp.vue';

// import AutocompleteComp from './components/AutocompleteComp.vue';

// import FinderFormComp from './components/github-finder/FinderFormComp.vue';

// import ModalTestComp from './components/custom-modal/ModalTestComp.vue';

// import TabCustomComp from './components/TabCustomComp.vue';
// import ScrollIndicatorComp from './components/ScrollIndicatorComp.vue';
// import QRCodeComp from './components/QRCodeComp.vue';
// import LightToDark from './components/light-dark-mode/LightToDark.vue';
// import AccordionComp from "./components/AccordionComp.vue"
// import RandomColorComp from "./components/RandomColorComp.vue"
// import StarRatingComp from "./components/StarRatingComp.vue"
// import ImageSliderComp from './components/ImageSliderComp.vue'
// import LoadMoreDataComp from './components/LoadMoreDataComp.vue';
// import TreeViewComp from './components/tree-view/TreeViewComp.vue';



</script>

<template>
  <main>
    <!-- <AccordionComp />
    <RandomColorComp />
    <StarRatingComp /> 
    <ImageSliderComp /> 
    <LoadMoreDataComp />
    <TreeViewComp /> 
     <QRCodeComp /> 
    <LightToDark /> 
    <ScrollIndicatorComp /> 
    <TabCustomComp />
    <ModalTestComp />
    <FinderFormComp /> 
    <AutocompleteComp />
    <MainGameComp /> -->
    <ResizeTestComp />

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
