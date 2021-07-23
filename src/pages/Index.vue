<template>
  <q-page class="flex flex-center">
    <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="300px"
        class="bg-purple text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            <q-img src="../../public/images/01.jpg"></q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            <q-img src="../../public/images/04.jpg"></q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            <q-img src="../../public/images/05.jpg"></q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            <q-img src="../../public/images/09.jpg"></q-img>
          </div>
        </q-carousel-slide>
      </q-carousel>
  </q-page>
</template>

<script> 
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data (){
    return {
      slide: "",
    }
  }
})
</script>

