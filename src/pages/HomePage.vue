<template>
  <div class="container-fluid bg-dark text-light">
    <div class="row">
      <section class="col-2 text-center">
        
        <h2 class="text-center p-2 pt-5">🎁 Gifted 🌟</h2>


        <!--SECTION FORM TEMPLATE -->
        <!-- <form v-on:submit.prevent="submitGift()" class="text-center my-2">
        <input action="" class="col-12 mt-2 p-2" placeholder="paste image URL here" v-model="newGift.url">
        <input action="" class="input col-12 mt-2 p-2" placeholder="gift description tag..." v-model="newGift.tag">
        <button class="btn btn-success p-1 pt-2 mt-2 col-7">
          <h6>Send Gift</h6>
        </button>
        </form> -->

        <!--SECTION END form template-->

      </section>


      <div class="col-9">
        <section class="row">

          <div v-for="g in gifts" :key="g.id" class="col-6 col-md-3 p-2">
            <!--SECTION GIFTS TEMPLATE-->
            <GiftCard :gift="g" />
          </div>
        </section>
      </div>
    </div>


  </div>
</template>

<script>
import { AppState } from '../AppState.js';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { onMounted, computed } from 'vue'
import GiftCard from '../components/GiftCard.vue';
import { Gift } from '../models/Gift';
import axios from 'axios';

export default {
  setup() {
    onMounted(() => {
      getGifts();
    });
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }
    return {
      gifts: computed(() => AppState.gifts),
      // form: {
      //   url: '',
      //   tag: '',
      // },

      // async createGift(giftId) {
      //   try {
      //     giftsService.createGift()
      //     logger.log("gift sent");
      //   } catch (error) {
      //    console.error(error)
      //    // @ts-ignore 
      //    Pop.error(('[ERROR]'), error.message)
      //   }
      // },
    };
  },
  components: { GiftCard, Gift }
}

</script>



<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  // .button{
  //   background-color: magenta;
  // }
}
</style>




