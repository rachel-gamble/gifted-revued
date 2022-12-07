<template>
  <div>
    <div class="rounded elevation-2 bg-light">
      <img v-if="gift.opened == true" :src="gift.url" class="img rounded top">
      <img v-else
        src="https://media.istockphoto.com/id/1168414941/photo/gift-wrapped-in-dark-paper-on-dark-background.jpg?s=612x612&w=0&k=20&c=WC6KFdi7_U74-V1Zg6of6qVNmEG8y75yI7Fofg_Px3k="
        class="img rounded top selectable" @click="openGift(gift.id)">
      <div class="p-1">
        <h5 v-if="gift.opened == true" class="fw-bold text-center p-1">{{ gift.tag }}</h5>
        <h5 v-else class="text-center">🏴 CLICK TO OPEN 🏴</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService';

export default {
  // props: gift: {type: Object, required: true}
  props: { gift: Gift },
  setup() {
    return {
      async openGift(giftId) {
        try {
          logger.log("opening gift");
          giftsService.openGift(giftId);
        }
        catch (error) {
          console.error(error);
          // @ts-ignore 
          Pop.error(("[ERROR]"), error.message);
        }
      }
    };

  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 35vh;
}
</style>