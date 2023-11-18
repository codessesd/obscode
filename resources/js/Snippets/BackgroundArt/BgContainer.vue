<template>
  <div class="blurFilter bgArt absolute top-0 left-0 h-screen w-screen filter overflow-hidden">
    <div v-for="sty in styleObjects">
      <BgCircle1
      :style="sty.positioning"
      class="absolute"
      :colour = sty.colour
      :size = size 
      ></BgCircle1>
    </div>
  </div>
</template>
<script setup>
  import BgCircle1 from "./BgCircle1.vue"
  import { reactive, ref } from "vue";

  let styleObjects = ref([]);
  var viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var viewHeight = window.innerHeight || document.documentElement.clientWidth || document.body.clientHeight;
 
  const size = 400;
  // let availableSizes = [100,200,300,400]
  let availableColours = ['#ff0066','#ff3399','#ff33cc','#9900ff'];
  shuffleArray(availableColours);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  for (let i = 0; i < 4; i++) { 
    let tops = Math.floor(Math.random()*viewHeight);
    // let lefts = Math.floor(Math.random()*viewWidth);
    let lefts = i*(size+30);
    let positionObject = ref({
      top: tops + 'px',
      left: lefts + 'px'
    });
    let colourNum = availableColours[i];
    let styleObject = {positioning : positionObject, colour : colourNum}
    styleObjects.value.push(styleObject);
  }

</script>

<style scoped>
.blurFilter{
  filter: blur(100px);
}
</style>